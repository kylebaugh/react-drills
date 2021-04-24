import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      array: ['cat', 'dog', 'hamster', 'duck', 'badger mole']
    };
  }

  render() {
    let petsDisplay = this.state.array.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });
    
    return <div className="App">{petsDisplay}</div>;
  }
}

export default App;

