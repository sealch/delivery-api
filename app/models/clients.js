const Sequelize = require('sequelize');
const { sequelize } = require('../database/db');

const Order = require('./orders');

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

Client.hasOne(Order, { foreinkey: 'client_id', sourceKey: 'id' });
Order.belongsTo(Client, { foreinkey: 'cliend_id', targetId: 'id' });

module.exports = Client;
