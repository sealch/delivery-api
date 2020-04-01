const Menu = require('../models/menus');

async function getMenus(req, res) {
    try {
        const menus = await Menu.findAll({
            attributes: ['id', 'name', 'price']
        });
        res.json(menus);
    } catch (error) {
        console.log(error);
        res.send('something went wrong');
    }
}

exports.getMenus = getMenus;
