import Courier from '../models/couriers';
import Order from '../models/orders';
import Client from '../models/clients';

export async function getCouriers(req, res) {
    try {
        const couriers = await Courier.findAll({
            attributes: ['id', 'name', 'delivery_service']
        });
        res.json(couriers);
    } catch (error) {
        console.log(error);
        res.send('something went wrong');
    }
}

export async function createCourier(req, res) {
    try {
        const { name } = req.body;
        const newCourier = await Courier.create({
            name
        }, {
            fields: ['name']
        });
        res.json({
            message: 'Courier created',
            data: newCourier
        });
    }
    catch (e) {
        console.log(e);
        res.send('something went wrong');
    }
}

export async function getOneCourier(req, res) {
    const { id } = req.params;
    try {
        const courier = await Courier.findOne({
            where: { id },
            attributes: ['id', 'name', 'delivery_service']
        });
        res.json({ courier });
    } catch (e) {
        console.log(e);
        res.send('something went wrong');
    }
}

export async function totalOrders(req, res) {
    const { id } = req.params;
    try {
        const orders = await Order.findAll({
            where: { courier_id: id },
            attributes: ['id', 'courier_id']
        });
        res.json({ orders: orders.length });
    } catch (e) {
        console.log(e);
        res.send('something went wrong');
    }
}

export async function updateCourier(req, res) {
    const { id } = req.params;
    const { name, delivery_service } = req.body;
    try {
        const courier = await Courier.findOne({
            where: {
                id
            }
        });
        await courier.update({
            name,
            delivery_service
        });
        return res.json({
            message: 'Courier updated',
            data: courier
        })
    } catch (e) {
        console.log(e);
        res.json({
            message: 'Something went wrong'
        })
    }
}

export async function deleteCourier(req, res) {
    const { id } = req.params;
    try {
        await Courier.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Courier deleted',
        })
    } catch (e) {
        console.log(e);
        res.json({
            message: 'Something went wrong'
        });
    }
}

export async function mostVisited(req, res) {
    const { id } = req.params;
    try {
        const orders = await Order.findAll({
            where: { courier_id: id },
            attributes: ['id', 'courier_id', 'client_id']
        });
        const clients = [];
        orders.forEach(i => clients.push(i.client_id));
        const counted = clients.reduce((acc, curr) => {
            if (curr in acc) {
                acc[curr]++;
            } else {
                acc[curr] = 1;
            }

            return acc;
        }, {});

        let mostVisitedId = Object.keys(counted).reduce((a, b) => counted[a] > counted[b] ? a : b);
        const mostVisitedAddress = await Client.findOne({
            where: { id: mostVisitedId },
            attributes: ['address']
        });
        res.json({
            mostVisitedAddress
        });
    } catch (e) {
        console.log(e);
        res.send('something went wrong');
    }
}

export async function avgTime(req, res) {
    const { id } = req.params;
    try {
        const orders = await Order.findAll({
            where: { courier_id: id },
            attributes: ['id', 'courier_id', 'order_time', 'delivery_time']
        });
        const completionTime = [];
        orders.forEach(i => {
            let orderDate = new Date();
            let [orderHours, orderMinutes, orderSeconds] = i.order_time.split(':');
            orderDate.setHours(+orderHours);
            orderDate.setMinutes(+orderMinutes);
            orderDate.setSeconds(+orderSeconds);
            if (i.delivery_time) {
                let deliveryDate = new Date();
                let [deliveryHours, deliveryMinutes, deliverySeconds] = i.delivery_time.split(':');
                deliveryDate.setHours(+deliveryHours);
                deliveryDate.setMinutes(+deliveryMinutes);
                deliveryDate.setSeconds(+deliverySeconds);
                completionTime.push(Math.abs(deliveryDate - orderDate));
            }
        });
        const avgInMs = (completionTime.reduce((a, b) => a + b, 0) / completionTime.length) || 0;
        const avgInMin = Math.round(avgInMs / (1000 * 60));
        res.json({
            AverageDeliveryTime: avgInMin + ' minutes'
        })
    } catch (e) {
        console.log(e);
        res.json({
            message: 'Something went wrong'
        });
    }
}
