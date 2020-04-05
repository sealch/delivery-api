require('dotenv').config();

module.exports = {
  development: {
    url: process.env.DEV_DB_URL || 'postgres://api_user:api_user@localhost:5432/postgres',
    dialect: 'postgres',
    operatorsAliases: false
  },
  prod: {
    url: process.env.PROD_DB_URL || 'postgres://api_user:api_user@postgres:5432/postgres',
    dialect: 'postgres',
    operatorsAliases: false
  }
};
