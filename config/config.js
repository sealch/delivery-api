require('dotenv').config();

module.exports = {
  development: {
    url: process.env.DEV_DB_URL || 'postgres://postgres:postgres@localhost:5432/postgres',
    dialect: 'postgres',
    operatorsAliases: false
  },
  prod: {
    url: process.env.PROD_DB_URL,
    dialect: 'postgres',
    operatorsAliases: false
  }
};
