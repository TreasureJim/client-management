import { Model } from "../db/model";

const genericModel = Model();

export async function time(req, res) {
	const { name, message } = req.body;
	
	try {
		const data = await genericModel.select('NOW()');
		res.status(200).json({ time: data.rows });
	}
	catch (err) {
		console.error(err);
		res.status(200).json({ time: err.stack });
	}
};