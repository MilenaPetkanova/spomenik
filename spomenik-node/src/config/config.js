require('dotenv').config();
 
const env = process.env.NODE_ENV || 'development'; 

const config = {
  "development": {
    "username": process.env.DB_DEV_USER,
    "password": process.env.DB_DEV_PASSWORD,
    "database": process.env.DB_DEV_NAME,
    "host": process.env.DB_DEV_HOST,
    "dialect": process.env.DB_DEV_DIALECT
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_PROD_USER,
    "password": process.env.DB_PROD_PASSWORD,
    "database": process.env.DB_PROD_NAME,
    "host": process.env.DB_PROD_HOST,
    "dialect": process.env.DB_PROD_DIALECT
  },
  "authentication": {
    "jwtAccessSecret": process.env.JWT_ACCESS_TOKEN_SECRET || '',
    "jwtRefreshSecret": process.env.JWT_REFRESH_TOKEN_SECRET || ''
  }
}

module.exports = config[env];

