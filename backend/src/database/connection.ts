import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Database configuration
const config = {
  // Use DATABASE_URL if available (recommended for production)
  url: process.env.DATABASE_URL,
  
  // Individual connection parameters
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME || 'morphy_db',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '',
  
  // SSL configuration (required for OVH)
  ssl: process.env.DB_SSL === 'true' ? {
    rejectUnauthorized: false
  } : false,
  
  // Connection pool settings
  pool: {
    min: 2,
    max: 10,
    acquireTimeoutMillis: 30000,
    createTimeoutMillis: 30000,
    destroyTimeoutMillis: 5000,
    idleTimeoutMillis: 30000,
    reapIntervalMillis: 1000,
    createRetryIntervalMillis: 200
  },
  
  // Logging
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
  
  // Dialect options
  dialectOptions: {
    ssl: process.env.DB_SSL === 'true' ? {
      require: true,
      rejectUnauthorized: false
    } : false
  }
};

// Create Sequelize instance
let sequelize: Sequelize;

if (config.url) {
  // Use DATABASE_URL (recommended for production)
  sequelize = new Sequelize(config.url, {
    dialect: 'postgres',
    logging: config.logging,
    pool: config.pool,
    dialectOptions: config.dialectOptions
  });
} else {
  // Use individual connection parameters
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
      host: config.host,
      port: config.port,
      dialect: 'postgres',
      logging: config.logging,
      pool: config.pool,
      dialectOptions: config.dialectOptions
    }
  );
}

// Test database connection
export const testConnection = async (): Promise<boolean> => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection established successfully.');
    return true;
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
    return false;
  }
};

// Close database connection
export const closeConnection = async (): Promise<void> => {
  try {
    await sequelize.close();
    console.log('✅ Database connection closed.');
  } catch (error) {
    console.error('❌ Error closing database connection:', error);
  }
};

export default sequelize;
