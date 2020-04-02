import Restaurant from '../models/restaurants';

export async function getRestaurants(req, res) {
    try {
        const restaurants = await Restaurant.findAll({
            attributes: ['id', 'name', 'address']
        });
        res.json({
            data: restaurants
        });
    } catch (e) {
        console.log(e);
        res.send('Something went wrong');
    }
}

export async function createRestaurant(req, res) {
    const { name, address } = req.body;
    try {
        let newRestaurant = await Restaurant.create({
            name,
            address
        }, {
            fields: ['name', 'address']
        });
        if (newRestaurant) {
            return res.json({
                message: 'New Restaurant created',
                data: newRestaurant
            })
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something went wrong'
        })
    }
}

export async function getOneRestaurant(req, res) {
    const { id } = req.params;
    try {
        const restaurant = await Restaurant.findOne({
            where: {
                id
            }
        });
        res.json(restaurant);
    } catch (e) {
        console.log(e);
    }
}

export async function updateRestaurant(req, res) {
    const { id } = req.params;
    const { name, address } = req.body;
    try {
        const restaurant = await Restaurant.findOne({
            where: {
                id
            }
        });
        await restaurant.update({
                name,
                address
        });
        return res.json({
            message: 'Restaurant updated',
            data: restaurant
        })
    } catch (e) {
        console.log(e);
        res.json({
            message: 'Something went wrong'
        })
    }
}

export async function deleteRestaurant(req, res) {
    const { id } = req.params;
    try {
        const deleteRowsCount = await Restaurant.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Restaurant deleted',
            count: deleteRowsCount
        })
    } catch (e) {
        console.log(e);
        res.json({
            message: 'Something went wrong'
        });
    }
}
