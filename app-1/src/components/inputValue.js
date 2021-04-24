import React, {Component} from 'react'
import FuncComp from './FuncComp'

class InputValue extends Component{
    constructor(){
      super()
      this.state = {
        inputValue: ''

      }
      this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (val) => {
    this.setState({
      inputValue: val
    })
  }
  render() {
    return (
      <div>
        <FuncComp 
        value={this.state.inputValue}
        handleChangeFn={this.handleChange}/>
        <p>{this.state.inputValue}</p>
      </div>

    )

  }
}

export default InputValue