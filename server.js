const express = require('express');

const app = express();

let urls = {}

app.use(express.static(__dirname + '/build'))

app.get('/', function(req, res){
  console.log(req)
  res.sendFile("index.html", {root: path.join(__dirname, '/public')});
})

app.post('/', function(req, res){ //handles post request from client
  console.log(re)
})


app.listen(3000);
