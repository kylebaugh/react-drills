import React, {Component} from 'react';
import './App.css';
import Todo from './components/Todo'

class App extends Component{
  constructor(){
    super()
    this.state = {
      input: '',
      todoList: []
    }
    // this.handleChange = this.handleChange.bind(this)
    this.addTodo = this.addTodo.bind(this)
  }

  handleChange(value){
    this.setState({
      input: value
    })
  }

  addTodo(){
    this.setState({
      todoList: [...this.state.todoList, this.state.input],
      input:''
    })
  }



  render(){
    let displayList = this.state.todoList.map((element, index) => {
      return <Todo key={index} element={element}/>
  })
    return (
      <div className="App">
        <h1>My To-Do List</h1>

        <input 
        value={this.state.input}
        onChange={(e) => this.handleChange(e.target.value)} 
        placeholder='Enter new task'
        />

        <button 
        onClick={() => this.addTodo(this.state.input)}
        >Add</button>

        {displayList}
      </div>
    );
  }
}

export default App;
