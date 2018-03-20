const express = require('express');
const app = express();
const path = require('path');
const appConfig = require('./config');
const { DatabasesEnum } = require('./constants');
const navbarRoute = require('./routes/navbar');

/* FLIP ME TO SWAP BETWEEN MYSQL AND MONGO */


if (appConfig.database === DatabasesEnum.MYSQL) {
	const db = require('./../mysql');
} else {
	const db = require('./../mongodb');
}



app.use(express.static('./client/dist'))

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname + './../client/dist/'));
});

app.get('/home', function(req, res){
  res.status(404).send('Homepage coming soon! Try again later!')
});

app.get('/signup', function(req, res){
  res.status(404).send('Login page coming soon! Try again later!')
});

app.use('/navbar', navbarRoute);

app.listen(3033, function(){
  console.log('Navbar is live on port #3033')
})
