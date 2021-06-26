const express = require('express');
const router = express.Router();
// const Model = require('../db/model');
const genController = require('../controllers/generic');

router.get('/', (req, res) => {
	res.send('/api')
});

// const dbModel = new Model('client')
// router.get('/time', async (req, res) => {
// 	time = (await dbModel.select('NOW()')).rows[0].now;
// 	res.send(time);

// })
router.get('/time', genController.time);

module.exports = router;