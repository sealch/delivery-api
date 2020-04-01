const Sequelize = require('sequelize');
const { sequelize } = require('../database/db');

const Menu = sequelize.define('menus', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.DECIMAL
    }
}, {
    timestamps: false
});

module.exports = Menu;
