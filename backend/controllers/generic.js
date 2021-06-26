const Model = require("../db/model");

const genericModel = new Model();

async function time(req, res) {
	try {
		const data = await genericModel.select('NOW()');
		res.status(200).json({ time: data.rows[0].now });
	}
	catch (err) {
		console.error(err);
		res.status(200).json({ time: err.stack });
	}
};


module.exports = {
	time
}