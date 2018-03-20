/* feeds the real data ids through the hashing function */

const mysql = require('mysql');
const crypto = require('crypto');

const realDataCount = 67588;

var hash = function(id) {
  var sha1 = crypto.createHash("sha1");
  sha1.update(id);
  return sha1.digest("hex").substring(0, 22);
}

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'yelp_db',
  password: '',
});

connection.query(`
  SELECT id as id FROM business
  LIMIT ${realDataCount}
`, (err, data) => {
  var ids = data.map((rawDataPacket) => {
    return rawDataPacket['id'];
  });

  newIds = ids.map((id) => {
    return hash(id);
  });

  for (var i = 0; i < ids.length; ++i) {
    connection.query(`
      UPDATE business SET id = '${newIds[i]}' WHERE id = '${ids[i]}'
    `, (err, data) => {
      if (err) {
        throw err;
      } else {
        console.log('success');
      }
    });
  }

});


