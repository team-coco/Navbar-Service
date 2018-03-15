const mysql = require('mysql');
const stream = require('stream');

const connection = mysql.createConnection({
	host: "chompy-test-database.cr8yw4uwndba.us-west-1.rds.amazonaws.com",
	user: "root",
	database: "chompyremote",
	password: "chompydatabase"
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
