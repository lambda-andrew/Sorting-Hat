import React, { Component } from 'react';
// cam also use dot notation like 
import Hog from './Hogwarts_houses.jpg';
import crow from './crow.jpg';
import lion from './lion.jpg';
import skunk from './skunk.jpg'; 
import snake from './snake.jpg';
import './App.css';
import Button from './components/Button';


class App extends Component {
  render() {
    return (
      <div className="App">
      <img id = 'pic' src={Hog}/>
        <header className="App-header">
          
          <h1 className="App-title">Welcome to Hogwarts</h1>
        </header>
        <p className="App-intro">
          To get started, press sort
        </p>
        <div>
          <div>
          <Button/>
            <img src={crow}/>
            <img src={lion}/>
            <img src={snake}/>
            <img src={skunk}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
