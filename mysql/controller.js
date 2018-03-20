const database = require('./index');

/**
 * Gets a set number of cities based on the query
 * @param {string} query The query to match cities against
 * @param {number} count the number of cities to return
 * @return Promise to manipulate cities data
 */
var getSimilarCities = function(query, count) {
  const sqlQuery = `
  SELECT *
  FROM city
  WHERE name LIKE '${query}%'
  LIMIT ${count}`;

  return new Promise((resolve, reject) => {
    database.query(sqlQuery, (err, businesses) => {
      if (err) {
        reject(err);
      } else {
        resolve(businesses);
      }
    });
  });
}

/**
 * Gets a set number of restaurants based on the query
 * @param {string} query The query to match restaurants against
 * @param {number} count the number of restaurants to return
 * @return Promise to manipulate restaurants data
 */
var getSimilarRestaurants = function(query, city, count) {
  const sqlQuery = `
    SELECT *
    FROM business
    WHERE city LIKE '${city}%'
    AND MATCH(name) AGAINST('${query}' IN NATURAL LANGUAGE MODE)
    LIMIT ${count}
  `;

  return new Promise((resolve, reject) => {
    database.query(sqlQuery, (err, businesses) => {
      if (err) {
        reject(err);
      } else {
        resolve(businesses);
      }
    });
  });
}

module.exports = {
  getSimilarCities,
  getSimilarRestaurants,
};