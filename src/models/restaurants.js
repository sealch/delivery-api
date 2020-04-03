const Sequelize = require('sequelize');
const { sequelize } = require('../database/db');

const Restaurant = sequelize.define('restaurants', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Restaurant;
