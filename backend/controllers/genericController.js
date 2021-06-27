const Model = require("../db/model");
const genericModel = new Model();

async function getTime(req, res) {
	try {
		const timeData = await genericModel.command('NOW()');
		res.status(200).json({ time: timeData.rows[0].now });
	}
	catch (err) {
		console.error(err);
		res.status(500);
	}
};


module.exports = {
	time: getTime
}