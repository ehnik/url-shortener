const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.static(__dirname + '/build'))

app.get('/', function(req, res){
  res.redirect('/catalog');
})

app.listen(4000);
