const mysql = require('mysql');
const keys = require('./../keys');

const connection = mysql.createConnection({
  host: keys.mysql_db_address,
  user: 'root',
  database: 'yelp_db',
  password: keys.mysql_db_password,
});

connection.connect(function(err) {
  if (err) {
    console.log('ERROR');
  } else {
    console.log('MYSQL IS CONNECTED')
  }
});

module.exports = connection;