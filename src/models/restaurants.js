const Sequelize = require('sequelize');
const { sequelize } = require('../database/db');

const Restaurant = sequelize.define('restaurants', {
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

module.exports = Restaurant;
