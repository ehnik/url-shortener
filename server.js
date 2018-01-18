const express = require('express');
const path = require('path');
const app = express();

let urls = {} //stores all submitted urls and their corresponding short versions

app.use(express.static(__dirname + '/build'))
app.use(express.json());

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/:url', function(req, res){
  let shortUrl = req.url.replace('/','')
  if(urls.hasOwnProperty(shortUrl)){ //if url is a saved shortened url, initiates redirect
    let origUrl = urls[shortUrl];
    if(!origUrl.match(/^[a-zA-Z]+:\/\//)){ //ensures url formatting
    origUrl = 'http://' + origUrl;
    }
    res.redirect(origUrl)
  }
  else{
    res.redirect('/')
  }
})

app.post('/', function(req, res){ //saves user-submitted link and short version to urls hash
  urls[req.body.shortUrl] = req.body.origUrl
  res.send('POST request to homepage');
})

app.listen(3000);
