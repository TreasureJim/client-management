const Model = require('../db/model');
const clientModel = new Model('client');

async function getClient(req, res) {
    try {
        const clientData = (await clientModel.select("client.*, manager_account.first_name as manager_first_name, manager_account.last_name as manager_last_name", undefined, "left join user_account manager_account on client.manager_id = manager_account.id")).rows;
        res.status(200).json(clientData);
    }
    catch (err) {
        console.error(err);
        res.status(500);
    }
}

async function addClient(req, res) {
    return Error("Unimplemented function");
}

module.exports = {
    getClient
}