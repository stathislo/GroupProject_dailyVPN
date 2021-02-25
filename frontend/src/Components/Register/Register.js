import React, { Component } from 'react'
import "./Register.css"
import logo from "./security.png"
import axios from "axios"

export default class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:"",
            password:""
        }
    }

    onEmailChange = (event)=>{
        this.setState({email:event.target.value})
        console.log(event.target.value)
    }

    onPasswordChange = (event)=>{
        this.setState({password:event.target.value})
    }

    onSubmitForm = (event)=>{
        event.preventDefault()
        const user = {
            email:this.state.email,
            password:this.state.password
        }

        axios.post("http://localhost:5000/registerform", user)
        .then(res=>{
            console.log("User created!!")
        })
        .catch(err=>{
            console.log(err)
        })        
    }


    render() {
        return (
            <div className='register'>
                <div className='register__container'>
                    <div className='register__leftSide'>
                        <img className='register__logo' src={logo}></img>
                    </div>
                    <div className='register__rightSide'>
                        <form onSubmit={this.onSubmitForm} className='register__form'>
                        <div className='register__textsAndLogo'>
                            <h2 className='register__h2'>Register Form</h2>
                        </div>
                        <div className='register__email'>
                        <input onChange={this.onEmailChange} className='register__input' type='email' placeholder='Write a valid email' name="email"></input>
                        </div>
                        <div className='register__password'>
                        <input onChange={this.onPasswordChange} className='register__input' type='password' placeholder='Write a valid password' name="password"></input>
                        </div>
                        <div className='register__button'>
                        <button className='register__btn' type='submit'>Submit</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
