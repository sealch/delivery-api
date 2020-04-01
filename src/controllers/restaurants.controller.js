const Restaurant = require('../models/restaurants');

async function getRestaurants(req, res) {
    try {
        const restaurants = await Restaurant.findAll({
            attributes: ['id', 'name', 'address']
        });
        res.json(restaurants);
    } catch (error) {
        console.log(error);
        res.send('something went wrong');
    }
}

exports.getRestaurants = getRestaurants;
