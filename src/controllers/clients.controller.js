import Client from '../models/clients';
import Menu from "../models/menus";

export async function getClients(req, res) {
    try {
        const clients = await Client.findAll({
            attributes: ['id', 'name', 'address']
        });
        res.json(clients);
    } catch (error) {
        console.log(error);
        res.send('something went wrong');
    }
}

export async function createClient(req, res) {
    let { name, address } = req.body;
    try {
        let newClient = await Client.create({
            name,
            address
        }, {
            fields: ['name', 'address']
        });
        if (newClient) {
            return res.json({
                message: 'New client created',
                data: newClient
            })
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something went wrong'
        })
    }
}

export async function getOneClient(req, res) {
    const { id } = req.params;
    try {
        const client = await Client.findOne({
            where: {
                id
            }
        });
        res.json(client);
    } catch (e) {
        console.log(e);
    }
}

export async function updateClient(req, res) {
    const { id } = req.params;
    const { name, address } = req.body;
    try {
        const client = await Client.findOne({
            where: {
                id
            }
        });
        await client.update({
            name,
            address
        });
        return res.json({
            message: 'Client updated',
            data: client
        })
    } catch (e) {
        console.log(e);
        res.json({
            message: 'Something went wrong'
        })
    }
}

export async function deleteClient(req, res) {
    const { id } = req.params;
    try {
        await Client.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Client deleted',
        })
    } catch (e) {
        console.log(e);
        res.json({
            message: 'Something went wrong'
        });
    }
}
