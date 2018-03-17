/* Displays a list of unique city names */

const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'yelp_db',
	password: '',
});

connection.query(`SELECT DISTINCT city FROM business`, (err, data) => {
	if (err) {
		throw(err);
	}

	var cities = data.map((rawDataPacket) => {
		return rawDataPacket.city;
	});

	console.log('cities loaded');

	for (let i = 0; i < cities.length; ++i) {
		connection.query(`INSERT INTO city (id, name) VALUES (${i},'${cities[i]}');`, (err, data) => {
			if (err) console.error(err);

			if (i % 1000 === 0) {
				console.log(i);
			}

			if (i === cities.length) {
				console.log('finished');
			}
		});
	}

	console.log('loading data now');
});