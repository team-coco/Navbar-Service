const MongoClient = require('mongodb').MongoClient;
const faker = require('faker');

const ObjectId = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
	if (err && err !== null) {
		throw err;
	}

	var database = client.db('yelp_db');
	var collection = database.collection('business');
	var docs = [];

	console.log('generating fake data');

	for (var i = 0; i < 670000; ++i) {
		if (i % 10000 === 0) console.log(i);

		docs[i] = {
			id : faker.random.alphaNumeric(16),
			name : faker.company.companyName(),
			neighborhood : faker.address.county(),
			address : faker.address.streetAddress(),
			city : faker.address.city(),
			state : faker.address.stateAbbr(),
			postal_code : faker.address.zipCode(),
			longitude : parseFloat(faker.address.longitude()),
			latitude : parseFloat(faker.address.latitude()),
			stars : faker.random.number(5),
			review_count : faker.random.number(64),
			is_open : faker.random.number(1),
		}
	}

	console.log('finished generating fake data');

	collection.insertMany(docs, (err, result) => {
		console.log('finished inserting');
		database.close();
	})
});