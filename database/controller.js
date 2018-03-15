const database = require('./index');

/**
 * Gets a set number of cities based on the query
 * @param {string} query The query to match cities against
 * @param {number} count the number of cities to return
 * @param {callback} callback Manipulates the data from the query
 */
var getSimilarCities = function(query, count, callback) {
    const query = `SELECT * FROM business WHERE name SOUNDS LIKE '${query}' LIMIT ${count}`;
    database.query(query, (err, businesses) => {
        if (err) {
            console.error(err);
        }

        callback(businesses);
    });
}

/**
 * Gets a set number of restaurants based on the query
 * @param {string} query The query to match restaurants against
 * @param {number} count the number of restaurants to return 
 * @param {callback} callback Manipulates the data from the query
 */
var getSimilarRestaurants = function(query, count, callback) {
    const query = 'SELECT * FROM business WHERE ';
    database.query(query, (err, businesses) => {
        if (err) {
            console.error(err);
        }

        callback(businesses);
    });
}

// database.query("SELECT * FROM user LIMIT 5", { type: Sequelize.QueryTypes.SELECT})
//   .then(users => {
// 		// We don't need spread here, since only the results will be returned for select queries

// 		console.log(users[0]);
//   });

module.exports = {
    getSimilarCities,
    getSimilarRestaurants,
};