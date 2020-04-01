const Courier = require('../models/couriers');

async function getCouriers(req, res) {
    try {
        const couriers = await Courier.findAll({
            attributes: ['id', 'name', 'total_orders']
        });
        res.json(couriers);
    } catch (error) {
        console.log(error);
        res.send('something went wrong');
    }
}

exports.getCouriers = getCouriers;
