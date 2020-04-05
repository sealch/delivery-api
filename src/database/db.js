const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_DATABASE || 'postgres',
    process.env.DB_USER || 'api_user',
    process.env.DB_PASSWORD || 'api_user',
    {
        host: process.env.DB_HOST || 'localhost',
        dialect:  'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
);

module.exports = {
    sequelize
};
