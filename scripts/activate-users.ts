import 'dotenv/config';

import { initializeDatabase, closeDatabase, User } from '../src/database/index.js';

const activateUsers = async () => {
  try {
    console.log('🔄 Activating all users (setting isActive = true)...');

    await initializeDatabase();

    const [updatedCount] = await User.update(
      { isActive: true },
      { where: { isActive: false } }
    );

    console.log(`✅ Updated ${updatedCount} user(s).`);
  } catch (error) {
    console.error('❌ Failed to activate users:', error);
    process.exitCode = 1;
  } finally {
    await closeDatabase();
  }
};

activateUsers();

