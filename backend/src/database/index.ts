import sequelize from './connection';
import User from './models/User';
import Conversion from './models/Conversion';

// Define associations
User.hasMany(Conversion, {
  foreignKey: 'userId',
  as: 'conversions',
});

Conversion.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
});

// Export models and sequelize instance
export {
  sequelize,
  User,
  Conversion,
};

// Initialize database
export const initializeDatabase = async (): Promise<void> => {
  try {
    // Test connection
    await sequelize.authenticate();
    console.log('✅ Database connection established successfully.');

    // Sync models (create tables if they don't exist)
    await sequelize.sync({ alter: process.env.NODE_ENV === 'development' });
    console.log('✅ Database models synchronized successfully.');

  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    throw error;
  }
};

// Close database connection
export const closeDatabase = async (): Promise<void> => {
  try {
    await sequelize.close();
    console.log('✅ Database connection closed.');
  } catch (error) {
    console.error('❌ Error closing database connection:', error);
  }
};
