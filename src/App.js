import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(){
    super()
    this.chars = "abcdefghijklmnopqrstuvwxyz"
    this.chars = this.chars.split("")

    this.state = {origUrl: null, shortUrl: null}

    for(let i = 0; i<=9; i++){
      this.chars.push(i)
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event){
    this.setState({origUrl: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault()
    let urls = this.urlConvert()
    axios.post('/', {
    origUrl: urls['origUrl'],
    shortUrl: urls['shortUrl']
    })
    .then( (res) => console.log(res ))
    .catch(function (error) {
    console.log(error);
    })
  }

  urlConvert(){
    let shortUrl = new Array(8)
    for(let x = 0; x<shortUrl.length; x++){
      shortUrl[x] = this.chars[Math.floor(Math.random()*Math.floor(35))] //gives indices 0-35
    }
    shortUrl = shortUrl.join("")
    this.setState({shortUrl})
    return {origUrl: this.state.origUrl, shortUrl}
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Url Shortener</h1>
        </header>

        <form onSubmit={(event)=>{this.handleSubmit(event)}}>
              <label>
                URL:
                <input id="origurl" type="text" value={this.state.origUrl}
                onChange={this.handleChange}/>
              </label>
          <input type="submit" value="Submit" />
        </form>

        <p> New url: </p>
        <p> <a href={this.state.origUrl}>{this.state.shortUrl}</a> </p>

      </div>
    );
  }
}

export default App;
