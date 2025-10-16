# PostgreSQL Database Setup for Morphy

This guide explains how to set up PostgreSQL database integration with your OVH database.

## 🔧 Environment Variables Setup

### For Local Development

Create a `.env` file in the `backend/` directory with your OVH PostgreSQL credentials:

```bash
# Database Configuration
DATABASE_URL=postgresql://username:password@your-ovh-host.com:5432/database_name
DB_HOST=your-ovh-postgres-host.com
DB_PORT=5432
DB_NAME=morphy_db
DB_USER=your_username
DB_PASSWORD=your_password
DB_SSL=true

# Application Configuration
NODE_ENV=development
PORT=3000
FRONTEND_URL=http://localhost:5173

# Security
JWT_SECRET=your-super-secret-jwt-key-here
SESSION_SECRET=your-session-secret-here

# File Upload Limits
MAX_FILE_SIZE=104857600
MAX_BATCH_SIZE=104857600
MAX_FILES_PER_BATCH=20
```

### For Production (Render.com)

The environment variables are configured in `render.yaml`:

```yaml
envVars:
  - key: DATABASE_URL
    fromDatabase:
      name: morphy-postgres
      property: connectionString
  - key: DB_SSL
    value: "true"
```

## 🗄️ Database Schema

The application creates two main tables:

### Users Table
- `id` (Primary Key)
- `email` (Unique)
- `password` (Hashed)
- `name` (Optional)
- `isActive` (Boolean)
- `createdAt`, `updatedAt` (Timestamps)

### Conversions Table
- `id` (Primary Key)
- `userId` (Foreign Key to Users)
- `originalFilename`
- `convertedFilename`
- `originalFormat`
- `convertedFormat`
- `fileSize`
- `conversionTime`
- `status` (pending/processing/completed/failed)
- `errorMessage` (Optional)
- `ipAddress` (Optional)
- `userAgent` (Optional)
- `createdAt`, `updatedAt` (Timestamps)

## 🚀 Getting Started

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Set Up Environment Variables

Copy the example configuration and fill in your OVH credentials:

```bash
cp config/database.example.ts config/database.ts
# Edit config/database.ts with your actual credentials
```

Or create a `.env` file with your database credentials.

### 3. Test Database Connection

```bash
npm run dev
```

The server will automatically:
- Connect to your PostgreSQL database
- Create tables if they don't exist
- Display connection status in the console

### 4. Verify Database Connection

Check the console output for:
```
✅ Database connection established successfully.
✅ Database models synchronized successfully.
🗄️ Database connected successfully
```

## 🔒 Security Best Practices

1. **Never commit credentials** to version control
2. **Use environment variables** for all sensitive data
3. **Enable SSL** for production connections (`DB_SSL=true`)
4. **Use strong passwords** for database users
5. **Limit database user permissions** to only what's needed

## 🐛 Troubleshooting

### Connection Issues

1. **Check your OVH database credentials**
2. **Verify SSL settings** (OVH requires SSL)
3. **Check firewall settings** on OVH
4. **Verify database name and user permissions**

### Common Error Messages

- `ECONNREFUSED`: Check host and port
- `ENOTFOUND`: Check hostname
- `authentication failed`: Check username/password
- `database does not exist`: Check database name
- `SSL connection required`: Set `DB_SSL=true`

## 📊 Database Monitoring

The application logs database operations in development mode. For production, consider:

1. **Database connection pooling** (already configured)
2. **Query performance monitoring**
3. **Connection timeout handling**
4. **Automatic reconnection** on connection loss

## 🔄 Migration and Updates

The application uses Sequelize's `sync()` method which automatically creates/updates tables. For production, consider using proper migrations:

```bash
# Generate migration
npx sequelize-cli migration:generate --name add-new-field

# Run migrations
npx sequelize-cli db:migrate
```

## 📝 Example Usage

```typescript
import { Conversion, User } from './database/index.js';

// Create a new conversion record
const conversion = await Conversion.create({
  originalFilename: 'document.pdf',
  convertedFilename: 'document.docx',
  originalFormat: 'pdf',
  convertedFormat: 'docx',
  fileSize: 1024000,
  conversionTime: 2500,
  status: 'completed',
  ipAddress: '192.168.1.1'
});

// Find conversions by user
const userConversions = await Conversion.findAll({
  where: { userId: 1 },
  include: [{ model: User, as: 'user' }]
});
```
