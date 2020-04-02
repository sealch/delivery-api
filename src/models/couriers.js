const Sequelize = require('sequelize');
const { sequelize } = require('../database/db');

const Courier = sequelize.define('couriers', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    delivery_service: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

module.exports = Courier;
