const express = require('express');
const router = express.Router();
import Model from '../db/model';

router.get('/', (req, res) => {
	res.send('/api')
});

const dbModel = new Model('client')
router.get('time', (req, res) => {
	res.send("Unimplemented");
})

module.exports = router;