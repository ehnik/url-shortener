const express = require('express');
const path = require('path');
const app = express();

let urls = {}

app.use(express.static(__dirname + '/build'))
app.use(express.json());

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/:url', function(req, res){
  console.log("url is: ")
  let shortUrl = req.url.replace('/','')
  if(urls.hasOwnProperty(shortUrl)){
    console.log("in")
    console.log("redirect to: ")
    console.log(urls[shortUrl])
    res.redirect(urls[shortUrl])
  }
  else{
    res.redirect('/')
  }
})

app.post('/', function(req, res){ //handles user input
  urls[req.body.shortUrl] = req.body.origUrl
  res.send('POST request to homepage');
})




app.listen(3000);
