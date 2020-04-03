const Sequelize = require('sequelize');
const { sequelize } = require('../database/db');

const Menu = require('./menus');
const Client = require('./clients');
const Courier = require('./couriers');
const Restaurant = require('./restaurants');

const Order = sequelize.define('orders', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    restaurant_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    client_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    courier_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    menu_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    order_time: {
        type: Sequelize.DATE,
        allowNull: false
    },
    delivery_time: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

Order.hasOne(Restaurant, { foreignKey: 'id', sourceKey: 'restaurant_id' });
Order.hasOne(Courier, { foreignKey: 'id', sourceKey: 'courier_id' });
Order.hasOne(Client, { foreignKey: 'id', sourceKey: 'client_id' });
Order.hasOne(Menu, { foreignKey: 'id', sourceKey: 'menu_id' });

Order.belongsTo(Restaurant, { foreignKey: 'id', targetId: 'restaurant_id' });
Order.belongsTo(Courier, { foreignKey: 'id', targetId: 'courier_id' });
Order.belongsTo(Client, { foreignKey: 'id', targetId: 'client_id' });
Order.belongsTo(Menu, { foreignKey: 'id', targetId: 'menu_id' });

module.exports = Order;
