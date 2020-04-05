require('dotenv').config();

module.exports = {
  development: {
    url: 'postgres://' + process.env.DB_USER + ':' + process.env.DB_PASSWORD + '@' + process.env.DB_HOST
          + ':' + process.env.DB_PORT + '/' + process.env.DB_DATABASE
          || 'postgres://postgres:postgres@localhost:5432/postgres',
    dialect: 'postgres',
    operatorsAliases: false
  },
  prod: {
    url: 'postgres://' + process.env.DB_USER + ':' + process.env.DB_PASSWORD + '@' + process.env.DB_HOST
        + ':' + process.env.DB_PORT + '/' + process.env.DB_DATABASE
        || 'postgres://postgres:postgres@postgres:5432/postgres',
    dialect: 'postgres',
    operatorsAliases: false
  }
};
