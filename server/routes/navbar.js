const express = require('express');
const router = express.Router();

router.get('/business/:name', (req, res) => {
	let name = req.params.name;

	

	res.send('hello ' + name);
});

module.exports = router;