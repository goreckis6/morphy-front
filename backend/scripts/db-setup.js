#!/usr/bin/env node

/**
 * Database Setup Utility
 * 
 * This script helps you set up and test your PostgreSQL database connection
 * Run with: node scripts/db-setup.js
 */

import { initializeDatabase, closeDatabase, sequelize } from '../src/database/index.js';
import { User, Conversion } from '../src/database/index.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const commands = {
  'test': 'Test database connection',
  'sync': 'Create/update database tables',
  'seed': 'Add sample data',
  'reset': 'Drop and recreate all tables',
  'status': 'Show database status'
};

async function testConnection() {
  console.log('🔍 Testing database connection...');
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection successful!');
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    console.log('\n💡 Troubleshooting tips:');
    console.log('1. Check your .env file has correct database credentials');
    console.log('2. Verify your OVH database is running and accessible');
    console.log('3. Ensure SSL is enabled (DB_SSL=true)');
    console.log('4. Check firewall settings on OVH');
    return false;
  }
}

async function syncTables() {
  console.log('🔄 Synchronizing database tables...');
  try {
    await sequelize.sync({ alter: true });
    console.log('✅ Database tables synchronized successfully!');
  } catch (error) {
    console.error('❌ Failed to sync tables:', error.message);
    throw error;
  }
}

async function seedData() {
  console.log('🌱 Adding sample data...');
  try {
    // Create a test user
    const testUser = await User.create({
      email: 'test@example.com',
      password: 'hashed_password_here',
      name: 'Test User',
      isActive: true
    });

    // Create a test conversion
    await Conversion.create({
      userId: testUser.id,
      originalFilename: 'test.csv',
      convertedFilename: 'test.pdf',
      originalFormat: 'csv',
      convertedFormat: 'pdf',
      fileSize: 1024,
      conversionTime: 1500,
      status: 'completed'
    });

    console.log('✅ Sample data added successfully!');
  } catch (error) {
    console.error('❌ Failed to add sample data:', error.message);
    throw error;
  }
}

async function resetDatabase() {
  console.log('⚠️  Resetting database (this will delete all data)...');
  try {
    await sequelize.sync({ force: true });
    console.log('✅ Database reset successfully!');
  } catch (error) {
    console.error('❌ Failed to reset database:', error.message);
    throw error;
  }
}

async function showStatus() {
  console.log('📊 Database Status:');
  try {
    await sequelize.authenticate();
    console.log('✅ Connection: Active');
    
    // Check tables
    const tables = await sequelize.getQueryInterface().showAllTables();
    console.log(`📋 Tables: ${tables.length} found`);
    tables.forEach(table => console.log(`   - ${table}`));
    
    // Count records
    const userCount = await User.count();
    const conversionCount = await Conversion.count();
    console.log(`👥 Users: ${userCount}`);
    console.log(`🔄 Conversions: ${conversionCount}`);
    
  } catch (error) {
    console.error('❌ Failed to get database status:', error.message);
  }
}

async function main() {
  const command = process.argv[2];
  
  if (!command || !commands[command]) {
    console.log('🗄️  Database Setup Utility\n');
    console.log('Usage: node scripts/db-setup.js <command>\n');
    console.log('Available commands:');
    Object.entries(commands).forEach(([cmd, desc]) => {
      console.log(`  ${cmd.padEnd(8)} - ${desc}`);
    });
    process.exit(1);
  }

  try {
    switch (command) {
      case 'test':
        await testConnection();
        break;
      case 'sync':
        await syncTables();
        break;
      case 'seed':
        await seedData();
        break;
      case 'reset':
        await resetDatabase();
        break;
      case 'status':
        await showStatus();
        break;
    }
  } catch (error) {
    console.error('❌ Command failed:', error.message);
    process.exit(1);
  } finally {
    await closeDatabase();
  }
}

main();
