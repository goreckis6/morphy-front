module.exports = {
  apps: [
    {
      name: 'formipeek',
      script: 'server/entry.express.js',
      env: {
        NODE_ENV: 'production',
        HOST: '0.0.0.0',
        PORT: 3000,
      },
      watch: false,
      autorestart: true,
      max_memory_restart: '300M'
    }
  ]
};
