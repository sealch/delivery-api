const Order = require('../models/orders');

async function getOrders(req, res) {
    try {
        const orders = await Order.findAll({
            attributes: ['id', 'restaurant_id', 'client_id', 'courier_id', 'menu_id', 'order_time', 'delivery_time']
        });
        res.json(orders);
    } catch (error) {
        console.log(error);
        res.send('something went wrong');
    }
}

exports.getOrders = getOrders;
