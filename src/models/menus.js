const Sequelize = require('sequelize');
const { sequelize } = require('../database/db');

const Menu = sequelize.define('menus', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Menu;
