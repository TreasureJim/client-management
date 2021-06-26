const express = require('express');
const router = express.Router();
const cryto = require('crypto');

router.post('/register', (req, res) => {
	// res.send('/api')
});


function getHashedPassword (password) {
    const sha256 = cryto.createHash('sha256');
    return sha256.update(password).digest('base64');
}


module.exports = router;