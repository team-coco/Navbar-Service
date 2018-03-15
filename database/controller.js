/**
 * Gets a set number of cities based on the query
 * @param {string} query The query to match cities against
 * @param {number} count the number of cities to return 
 */
var getSimilarCities = function(query, count) {

}

/**
 * Gets a set number of restaurants based on the query
 * @param {string} query The query to match restaurants against
 * @param {number} count the number of restaurants to return 
 */
var getSimilarRestaurants = function(query, count) {

}

database.query("SELECT * FROM user LIMIT 5", { type: Sequelize.QueryTypes.SELECT})
  .then(users => {
		// We don't need spread here, since only the results will be returned for select queries

		console.log(users[0]);
  });
