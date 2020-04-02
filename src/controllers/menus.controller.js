import Menu from '../models/menus';

export async function getMenus(req, res) {
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

export async function createMenu(req, res) {
    let { name, price } = req.body;
    try {
        let newMenu = await Menu.create({
            name,
            price
        }, {
            fields: ['name', 'price']
        });
        if (newMenu) {
            return res.json({
                message: 'New menu created',
                data: newMenu
            })
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something went wrong'
        })
    }
}

export async function getOneMenu(req, res) {
    const { id } = req.params;
    try {
        const menu = await Menu.findOne({
            where: {
                id
            }
        });
        res.json(menu);
    } catch (e) {
        console.log(e);
    }
}

export async function updateMenu(req, res) {
    const { id } = req.params;
    const { name, price } = req.body;
    try {
        const menu = await Menu.findOne({
            where: {
                id
            }
        });
        await menu.update({
            name,
            price
        });
        return res.json({
            message: 'Menu updated',
            data: menu
        })
    } catch (e) {
        console.log(e);
        res.json({
            message: 'Something went wrong'
        })
    }
}

export async function deleteMenu(req, res) {
    const { id } = req.params;
    try {
        await Menu.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Menu deleted',
        })
    } catch (e) {
        console.log(e);
        res.json({
            message: 'Something went wrong'
        });
    }
}
