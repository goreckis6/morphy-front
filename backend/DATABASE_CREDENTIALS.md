# Database Connection Setup Guide

## 🔧 Where to Provide Your OVH PostgreSQL Credentials

### **1. For Local Development**

Create a `.env` file in the `backend/` directory with your OVH credentials:

```bash
# Create the file
touch backend/.env

# Add your OVH PostgreSQL credentials
cat > backend/.env << EOF
# Database Configuration
DATABASE_URL=postgresql://username:password@your-ovh-host.com:5432/database_name

# OR use individual parameters:
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

# Security (generate strong secrets)
JWT_SECRET=your-super-secret-jwt-key-here
SESSION_SECRET=your-session-secret-here
EOF
```

### **2. For Production (Render.com)**

Your credentials are already configured in `render.yaml`:

```yaml
envVars:
  - key: DATABASE_URL
    fromDatabase:
      name: morphy-postgres
      property: connectionString
  - key: DB_SSL
    value: "true"
```

### **3. Manual Environment Variables (Alternative)**

If you prefer to set environment variables manually:

#### **Windows (PowerShell):**
```powershell
$env:DATABASE_URL="postgresql://username:password@your-ovh-host.com:5432/database_name"
$env:DB_SSL="true"
$env:NODE_ENV="development"
```

#### **Windows (Command Prompt):**
```cmd
set DATABASE_URL=postgresql://username:password@your-ovh-host.com:5432/database_name
set DB_SSL=true
set NODE_ENV=development
```

#### **Linux/Mac:**
```bash
export DATABASE_URL="postgresql://username:password@your-ovh-host.com:5432/database_name"
export DB_SSL="true"
export NODE_ENV="development"
```

## 📋 What You Need from OVH

To fill in the credentials, you'll need from your OVH PostgreSQL database:

1. **Host**: Your database server hostname
2. **Port**: Usually `5432` for PostgreSQL
3. **Database Name**: The name of your database
4. **Username**: Your database username
5. **Password**: Your database password
6. **SSL**: Must be enabled (`true`)

## 🔍 Example OVH Connection String

```
DATABASE_URL=postgresql://morphy_user:your_secure_password@postgresql-123456-0.cloud.ovh.net:5432/morphy_db
```

## ✅ Test Your Connection

After setting up your credentials, test the connection:

```bash
cd backend
npm run db:test
```

This will verify that your OVH database is accessible and credentials are correct.

## 🚨 Security Notes

- **Never commit** your `.env` file to version control
- **Use strong passwords** for your database user
- **Enable SSL** (required for OVH)
- **Limit database user permissions** to only what's needed
