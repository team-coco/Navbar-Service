const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/yelp_db', () => {
  console.log('connected to mongodb');
}).catch((err) => {
  console.log(err);
  process.exit(1);
});

module.exports = mongoose;