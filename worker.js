const mysql = require('mysql');
const stream = require('stream');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'yelp_db',
	password: '',
});

connection.connect(function(err) {
	if (err) {
		console.error(err);
	} else {
		connection.query('SELECT city FROM business')
			.stream()
			.pipe(stream.Transform({
				objectMode: true,
				transform: (data, encoding, callback) => {

					connection.query(`INSERT INTO city (name) VALUES ('${data.city}')`, (err, result) => {
						if (err) {
							console.error(err);
						}
					});

					callback();
				}
			}))
			.on('finish', () => { console.log('finished')})
	}
});