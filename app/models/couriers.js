const Sequelize = require('sequelize');
const { sequelize } = require('../database/db');

const Order = require('./orders');

const Courier = sequelize.define('couriers', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    total_orders: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

Courier.hasOne(Order, { foreinkey: 'courier_id', sourceKey: 'id' });
Order.belongsTo(Courier, { foreinkey: 'courier_id', targetId: 'id' });

module.exports = Courier;
