const Client = require('../models/clients');

async function getClients(req, res) {
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

exports.getClients = getClients;
