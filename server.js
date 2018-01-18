const express = require('express');
const path = require('path');
const app = express();

let urls = {}

app.use(express.static(__dirname + '/build'))
app.use(express.json());

app.get('/', function(req, res){
  console.log(req)
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.post('/', function(req, res){ //handles user input
  console.log(req.body)
  res.send('POST request to homepage');
  //res.redirect()
})


app.listen(3000);
