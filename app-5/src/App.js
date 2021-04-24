import React, {Component} from 'react';
import './App.css';
import Image from './components/Image'

class App extends Component{
  render(){
  return (
    <div className="App">
      <Image url={'https://inteng-storage.s3.amazonaws.com/img/iea/yrwQvLJbON/sizes/programmer-memes_resize_md.jpg'} />
    </div>
    );
  }
}

export default App;
