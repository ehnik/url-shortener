const express = require('express');
const path = require('path');
const app = express();

let urls = {}

app.use(express.static(__dirname + '/build'))

app.get('/', function(req, res){
  console.log(req)
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.post('/', function(req, res){ //handles post request from client
  console.log(req)
})


app.listen(3000);
