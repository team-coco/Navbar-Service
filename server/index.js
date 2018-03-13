const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./client/dist'))

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname + './../client/dist/'));
});



app.get('/home', function(req, res){
  res.status(404).send('Homepage coming soon! Try again later!')
})

app.get('/signup', function(req, res){
  res.status(404).send('Login page coming soon! Try again later!')
})



app.listen(3033, function(){
  console.log('Navbar is live on port #3033')
})
