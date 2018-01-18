import React, { Component } from 'react';
import './App.css';

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
    this.urlConvert()
  }

  urlConvert(){
    let newUrl = new Array(8)
    for(let x = 0; x<newUrl.length; x++){
      newUrl[x] = this.chars[Math.floor(Math.random()*Math.floor(35))] //gives indices 0-35
    }
    newUrl = "http://shortner." + newUrl.join("")
    this.setState({shortUrl: newUrl})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Url Shortener</h1>
        </header>

        <form action="POST" onSubmit={(event)=>{this.handleSubmit(event)}}>
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
