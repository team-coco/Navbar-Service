const express = require('express');
const path = require('path');
const appConfig = require('./config');
const { DatabasesEnum } = require('./constants');
const navbarRoute = require('./routes/navbar');


/* FLIP ME TO SWAP BETWEEN MYSQL AND MONGO */
if (appConfig.database === DatabasesEnum.MYSQL) {
	require('./../mysql');
} else {
	require('./../mongodb');
}

const app = express();

app.use(express.static('./client/dist'));

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, './../client/dist/'));
});

app.get('/home', (req, res) => {
  res.status(404).send('Homepage coming soon! Try again later!');
});

app.get('/signup', (req, res) => {
  res.status(404).send('Login page coming soon! Try again later!')
});

app.use('/navbar', navbarRoute);

app.listen(3033, () => {
  console.log('Navbar is live on port #3033');
});
