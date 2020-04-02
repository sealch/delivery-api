import Order from '../models/orders';
import Courier from '../models/couriers';

const { sequelize } = require('../database/db');

export async function getOrders(req, res) {
    try {
        const orders = await Order.findAll({
            attributes: ['id', 'restaurant_id', 'client_id', 'courier_id', 'menu_id', 'order_time', 'delivery_time']
        });
        res.json({orders});
    } catch (e) {
        console.log(e);
        res.send('something went wrong');
    }
}

export async function createOrder(req, res) {
    try {
        const { restaurant_id, client_id, courier_id, menu_id} = req.body;
        const order_time = Date();
        console.log(order_time);
        const newOrder = await Order.create({
            restaurant_id,
            client_id,
            courier_id,
            menu_id,
            order_time
        }, {
            fields: ['restaurant_id', 'client_id', 'courier_id', 'menu_id', 'order_time', 'delivery_time']
        });
        res.json({
            message: 'New Order created',
            data: newOrder
        });
    }
    catch (e) {
        console.log(e);
        res.send('something went wrong');
    }
}

export async function getOneOrder(req, res) {
    const { id } = req.params;
    try {
        const order = await Order.findOne({
            where: { id },
            attributes: ['id', 'restaurant_id', 'client_id', 'courier_id', 'menu_id', 'order_time', 'delivery_time']
        });
        res.json({ order });
    } catch (e) {
        console.log(e);
        res.send('something went wrong');
    }
}

export async function getOrderByCourier(req, res) {
    const { id } = req.params;
    try {
        const orders = await Order.findAll({
            attributes: ['id', 'restaurant_id', 'client_id', 'courier_id', 'menu_id', 'order_time', 'delivery_time'],
            where: { courier_id: id }
        });
        res.json({
            orders
        });
    } catch (e) {
        console.log(e);
        res.send('something went wrong');
    }
}

export async function confirmDelivery(req, res) {
    const { id } = req.params;
    try {
        const delivery_time = Date();
        await Order.update(
            { delivery_time },
            { where: { id } }
        );
        const order = await Order.findOne({
            where: { id },
            attributes: ['id', 'restaurant_id', 'client_id', 'courier_id', 'menu_id', 'order_time', 'delivery_time']
        });
        await Courier.update(
            { total_orders: sequelize.literal('total_orders + 1') },
            { where: { id: order.courier_id } }
        );
        res.json({
            message: "Order delivered successfully"
        });
    } catch (e) {
        console.log(e);
        res.send('something went wrong');
    }
}
