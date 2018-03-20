const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'yelp_db',
  password: '',
});

connection.connect(function(err) {
  if (err) {
    console.log('ERROR');
  } else {
    console.log('MYSQL IS CONNECTED')
  }
});

module.exports = connection;