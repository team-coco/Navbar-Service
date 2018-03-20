const database = require('./index');
const { Business } = require('./businessModel');
const { City } = require('./cityModel');

/**
 * Gets a set number of cities based on the query
 * @param {string} query The query to match cities against
 * @param {number} count the number of cities to return
 * @return Promise to manipulate cities data
 */
var getSimilarCities = function(query, count) {
  return City
    .find({$text: {$search: query}}, {score: {$meta: 'textScore'}})
    .sort({score: {$meta: 'textScore'}})
    .limit(count);
}

/**
 * Gets a set number of restaurants based on the query
 * @param {string} query The query to match restaurants against
 * @param {number} count the number of restaurants to return
 * @return Promise to manipulate restaurants data
 */
var getSimilarRestaurants = function(query, city, count) {

  console.log(query, city);

  return Business
  .find({$text: {$search: query}, city: city}, {score: {$meta: 'textScore'}})
  .sort({score: {$meta: 'textScore'}})
  .limit(count);
}

module.exports = {
  getSimilarCities,
  getSimilarRestaurants,
};