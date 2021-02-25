import React, { Component } from 'react'
import "./Login"

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:"",
            password:""
        }
    }
    render() {
        return (
            <div className="login">
                Login
            </div>
        )
    }
}
