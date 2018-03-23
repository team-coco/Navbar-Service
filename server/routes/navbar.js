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

router.get('/business/:city/:name', async (req, res) => {
  const city = decodeURI(req.params.city);
  const name = decodeURI(req.params.name);

  try {
    let data = await dbController.getSimilarRestaurants(name, city, 3)
    res.send(data);

  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/city/:name', async (req, res) => {
  const name = decodeURI(req.params.name);

  try {
    let data   = await dbController.getSimilarCities(name, 3);
    let cities = await data.map(city => {
      return {name: city.name}
    });

    res.send(cities);

  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
