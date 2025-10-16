import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../connection';

// Conversion attributes interface
interface ConversionAttributes {
  id: number;
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
  createdAt: Date;
  updatedAt: Date;
}

// Optional attributes for creation
interface ConversionCreationAttributes extends Optional<ConversionAttributes, 'id' | 'userId' | 'errorMessage' | 'ipAddress' | 'userAgent' | 'createdAt' | 'updatedAt'> {}

// Conversion model class
class Conversion extends Model<ConversionAttributes, ConversionCreationAttributes> implements ConversionAttributes {
  public id!: number;
  public userId?: number;
  public originalFilename!: string;
  public convertedFilename!: string;
  public originalFormat!: string;
  public convertedFormat!: string;
  public fileSize!: number;
  public conversionTime!: number;
  public status!: 'pending' | 'processing' | 'completed' | 'failed';
  public errorMessage?: string;
  public ipAddress?: string;
  public userAgent?: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Initialize the model
Conversion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    originalFilename: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    convertedFilename: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    originalFormat: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    convertedFormat: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    fileSize: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    conversionTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'Conversion time in milliseconds',
    },
    status: {
      type: DataTypes.ENUM('pending', 'processing', 'completed', 'failed'),
      allowNull: false,
      defaultValue: 'pending',
    },
    errorMessage: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ipAddress: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    userAgent: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'conversions',
    timestamps: true,
    indexes: [
      {
        fields: ['userId'],
      },
      {
        fields: ['status'],
      },
      {
        fields: ['createdAt'],
      },
      {
        fields: ['originalFormat', 'convertedFormat'],
      },
    ],
  }
);

export default Conversion;
