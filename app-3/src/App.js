import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filterString:'',
      pets: ['cat', 'dog', 'hamster', 'duck', 'badger']
    };
    
    // this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value){
    this.setState({
      filterString: value
    })
  }  


  render() {
 
    let petsToDisplay = this.state.pets
    .filter((element, index) => {
      return element.includes(this.state.filterString);
    })
    .map((element, index) => {
      return <p key={index}>{element}</p>
    });

    return (
      <div className="App">            
        <input onChange={e => this.handleChange(e.target.value)} type='text'/>
        {petsToDisplay}    
      </div>
    )
  };

}


export default App;


