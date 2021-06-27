const Model = require('../db/model');
const clientModel = new Model('client');

async function getClient(req, res) {
    try {
        const clientData = (await clientModel.select('*')).rows;
        console.log(clientData);
        res.status(200).json(clientData);
        // select * from client left join user_account on client.manager_id = user_account.user_id;
    }
    catch (err) {
        console.error(err);
        res.status(500);
    }
} 

module.exports = {
    getClient
}