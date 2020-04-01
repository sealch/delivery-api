const Sequelize = require('sequelize');
const { sequelize } = require('../database/db');

const Client = sequelize.define('clients', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
});

module.exports = Client;
