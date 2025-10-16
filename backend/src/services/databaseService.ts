import { User, Conversion } from '../database/index.js';

export interface ConversionData {
  userId?: number;
  originalFilename: string;
  convertedFilename: string;
  originalFormat: string;
  convertedFormat: string;
  fileSize: number;
  conversionTime: number;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  errorMessage?: string;
  ipAddress?: string;
  userAgent?: string;
}

export interface UserData {
  email: string;
  password: string;
  name?: string;
}

export class DatabaseService {
  // User operations
  static async createUser(userData: UserData): Promise<User> {
    return await User.create(userData);
  }

  static async findUserByEmail(email: string): Promise<User | null> {
    return await User.findOne({ where: { email } });
  }

  static async findUserById(id: number): Promise<User | null> {
    return await User.findByPk(id);
  }

  static async updateUser(id: number, updates: Partial<UserData>): Promise<User | null> {
    const user = await User.findByPk(id);
    if (user) {
      await user.update(updates);
      return user;
    }
    return null;
  }

  // Conversion operations
  static async createConversion(conversionData: ConversionData): Promise<Conversion> {
    return await Conversion.create(conversionData);
  }

  static async findConversionById(id: number): Promise<Conversion | null> {
    return await Conversion.findByPk(id);
  }

  static async findConversionsByUser(userId: number, limit: number = 50): Promise<Conversion[]> {
    return await Conversion.findAll({
      where: { userId },
      order: [['createdAt', 'DESC']],
      limit
    });
  }

  static async findConversionsByStatus(status: string, limit: number = 50): Promise<Conversion[]> {
    return await Conversion.findAll({
      where: { status },
      order: [['createdAt', 'DESC']],
      limit
    });
  }

  static async updateConversionStatus(
    id: number, 
    status: 'pending' | 'processing' | 'completed' | 'failed',
    errorMessage?: string
  ): Promise<Conversion | null> {
    const conversion = await Conversion.findByPk(id);
    if (conversion) {
      await conversion.update({ 
        status, 
        ...(errorMessage && { errorMessage })
      });
      return conversion;
    }
    return null;
  }

  // Analytics operations
  static async getConversionStats(userId?: number) {
    const whereClause = userId ? { userId } : {};
    
    const [total, completed, failed, pending] = await Promise.all([
      Conversion.count({ where: whereClause }),
      Conversion.count({ where: { ...whereClause, status: 'completed' } }),
      Conversion.count({ where: { ...whereClause, status: 'failed' } }),
      Conversion.count({ where: { ...whereClause, status: 'pending' } })
    ]);

    const avgConversionTime = await Conversion.findOne({
      where: { ...whereClause, status: 'completed' },
      attributes: [
        [Conversion.sequelize!.fn('AVG', Conversion.sequelize!.col('conversionTime')), 'avgTime']
      ],
      raw: true
    });

    return {
      total,
      completed,
      failed,
      pending,
      avgConversionTime: avgConversionTime?.avgTime || 0
    };
  }

  static async getPopularFormats(limit: number = 10) {
    return await Conversion.findAll({
      attributes: [
        'originalFormat',
        'convertedFormat',
        [Conversion.sequelize!.fn('COUNT', '*'), 'count']
      ],
      group: ['originalFormat', 'convertedFormat'],
      order: [[Conversion.sequelize!.fn('COUNT', '*'), 'DESC']],
      limit,
      raw: true
    });
  }

  static async getRecentConversions(limit: number = 20): Promise<Conversion[]> {
    return await Conversion.findAll({
      include: [{
        model: User,
        as: 'user',
        attributes: ['email', 'name']
      }],
      order: [['createdAt', 'DESC']],
      limit
    });
  }

  // Cleanup operations
  static async deleteOldConversions(daysOld: number = 30): Promise<number> {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysOld);
    
    const deletedCount = await Conversion.destroy({
      where: {
        createdAt: {
          [Conversion.sequelize!.Op.lt]: cutoffDate
        }
      }
    });

    return deletedCount;
  }

  static async deleteFailedConversions(daysOld: number = 7): Promise<number> {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysOld);
    
    const deletedCount = await Conversion.destroy({
      where: {
        status: 'failed',
        createdAt: {
          [Conversion.sequelize!.Op.lt]: cutoffDate
        }
      }
    });

    return deletedCount;
  }
}
