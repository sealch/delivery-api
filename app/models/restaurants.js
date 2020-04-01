const Sequelize = require('sequelize');
const { sequelize } = require('../database/db');

const Order = require('./orders');

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

Restaurant.hasMany(Order, { foreinkey: 'restaurant_id', sourceKey: 'id' });
Order.belongsTo(Restaurant, { foreinkey: 'restaurant_id', targetId: 'id' });

module.exports = Restaurant;
