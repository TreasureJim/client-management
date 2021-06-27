const express = require('express');
const router = express.Router();
const genController = require('../controllers/genericController');
const clientRoute = require('./clientRoute');


router.get('/time', genController.time);


router.use('/client', clientRoute);

module.exports = router;