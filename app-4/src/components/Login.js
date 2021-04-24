import React, {Component} from 'react'

class Login extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
        }
        this.handleChange1 = this.handleChange1.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.alert = this.alert.bind(this)
    }

    handleChange1(value){
        this.setState({
            username: value
        })
    }
 
    handleChange2(value){
        this.setState({
            passowrd: value
        })
    }

    alert(){
        alert(`Username: ${this.state.username} Password: ${this.state.passowrd}`)
    }

    render(){
        return(
            <div>
                <input onChange={(e) => this.handleChange1(e.target.value)}/>
                <input onChange={(e) => this.handleChange2(e.target.value)} />
                <button onClick={this.alert}
                >Login</button>
            </div>
        )
    }
}

export default Login