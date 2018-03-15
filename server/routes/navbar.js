const express = require('express');
const router = express.Router();

router.get('/business/:name', (req, res) => {
	let name = req.params.name;



	res.send('hello ' + name);
});

router.get('/city/:name', (req, res) => {

});

module.exports = router;