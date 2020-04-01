const Sequelize = require('sequelize');
const { sequelize } = require('../database/db');

const Order = require('./orders');

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

Menu.hasMany(Order, { foreinkey: 'menu_id', sourceKey: 'id' });
Order.belongsTo(Menu, { foreinkey: 'menu_id', targetId: 'id' });

module.exports = Menu;
