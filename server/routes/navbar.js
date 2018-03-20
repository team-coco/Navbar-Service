const express = require('express');
const appConfig = require('./../config');
const { DatabasesEnum } = require('./../constants');

const router = express.Router();

let dbController;

if (appConfig.database === DatabasesEnum.MYSQL) {
  dbController = require('./../../mysql/controller');
} else {
  dbController = require('./../../mongodb/controller');
}

router.get('/business/:city/:name', (req, res) => {
  const city = decodeURI(req.params.city);
  const name = decodeURI(req.params.name);

  dbController.getSimilarRestaurants(name, city, 3)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.get('/city/:name', (req, res) => {
  const name = decodeURI(req.params.name);

  dbController.getSimilarCities(name, 3)
    .then((data) => {
      return data.map(city => {
        return {
          name: city.name,
        };
      });
    })
    .then((cities) => {
      res.send(cities);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
