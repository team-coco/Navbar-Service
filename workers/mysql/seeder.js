/* seeds the database up to 10million entries with fake data */

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

const mysql = require('mysql');
const faker = require('faker');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'yelp_db',
  password: '',
});

var recursivelySeed = (connection) => {
  connection.query('SELECT COUNT(*) as count FROM business', (err, data) => {
    var businessSize = data[0].count;

    if (businessSize > 10000000) {
      connection.end();
      return;
    }

    console.log('businessSize:', businessSize);

    var values = [];

    for (let i = 0; i < 10000; ++i) {
      var id = mysql.escape(faker.random.alphaNumeric(16));
      var name = mysql.escape(faker.company.companyName());
      var neighborhood = mysql.escape(faker.address.county());
      var address = mysql.escape(faker.address.streetAddress());
      var city = mysql.escape(faker.address.city());
      var state = mysql.escape(faker.address.stateAbbr());
      var postal_code = mysql.escape(faker.address.zipCode());
      var longitude = mysql.escape(parseFloat(faker.address.longitude()));
      var latitude = mysql.escape(parseFloat(faker.address.latitude()));
      var stars = mysql.escape(faker.random.number(5));
      var review_count = mysql.escape(faker.random.number(64));
      var is_open = mysql.escape(faker.random.number(1));

      values.push(`(${id}, ${name}, ${neighborhood}, ${address}, ${city}, ${state}, ${postal_code}, ${latitude}, ${longitude}, ${stars}, ${review_count}, ${is_open})`);
    }

    values = values.join(', ');

    connection.query(`INSERT INTO business (id, name, neighborhood, address, city, state, postal_code, latitude, longitude, stars, review_count, is_open) VALUES ${values}`, (err, data) => {
      if (err) console.error('fail');
    });

    recursivelySeed(connection);

  });
}

console.log(`${numCPUs} CPUs running`);

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; ++i) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  console.log(`Worker ${process.pid} started`);

  connection.connect();
  recursivelySeed(connection);
}