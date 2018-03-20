const MongoClient = require('mongodb').MongoClient;

const ObjectId = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    throw err;
  }

  var database = client.db('yelp_db');
  var businessesCollection = database.collection('businesses');
  var citiesCollection = database.collection('cities');

  console.log('loading cities...');

  businessesCollection.distinct('city', (err, cities) => {
    if (err) {
      throw err;
    }

    console.log(`[${cities.length}] cities loaded`);

    cities = cities.map((city) => {
      return {
        name: city,
      };
    });

    console.log('now seeding cities collection...');

    citiesCollection.insertMany(cities, (err, result) => {
      console.log('cities collection seeded')
      database.close();
    });
  });
});