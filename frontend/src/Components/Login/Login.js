import React, { Component } from 'react'
import "./Login.css"
import axios from "axios"
import logo from "./security.png"

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:"",
            password:""
        }

        axios.get("http://localhost:5000/login", { withCredentials:true})
        .then(ifUserIsLoggedIn=>{
            console.log(ifUserIsLoggedIn)
            if(ifUserIsLoggedIn.data==="not loggedin"){
                this.props.history.push("/login")
            }else if(ifUserIsLoggedIn.data==="loggedin"){
                this.props.history.push('/confirmlogout')
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    onEmailChange = (event)=>{
        this.setState({email:event.target.value})
        console.log(event.target.value)
    }

    onPasswordChange = (event)=>{
        this.setState({ password:event.target.value})
        console.log(event.target.value)
    }

    onFormSubmit = (event)=>{
        event.preventDefault()

        const user = {
            email:this.state.email,
            password:this.state.password
        }

        axios.post("http://localhost:5000/loginform", user, { withCredentials:true })
        .then(res=>{
            if(res.data.perase==="perase"){
                console.log(res)
                this.props.history.push("/")
            }else if(res.data==="Lathos pass"){
                let message = document.getElementById("message").textContent="Wrong email or password"
            }else if(res.data==="no email"){
                let message = document.getElementById("message").textContent="Wrong email or password"
            }

        })
        .catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div className="login">
            <div className='login__container'>
            <div className='login__leftSide'>
            <img src={logo}></img>
            </div>
            <div className='login__rightSide'>
            <form onSubmit={this.onFormSubmit}>
                    <div className='login__email'>
                        <input onChange={this.onEmailChange} type='email' name='email' placeholder='Write your email'></input>
                    </div>
                    <div className='login__password'>
                        <input onChange={this.onPasswordChange} type='password' name='password' placeholder='Write your password'></input>
                    </div>
                    <div className='login__button'>
                        <button type='submit'>Login</button>
                    </div>
                    <h5 id='message'></h5>
                    <h5 className='login__already'>You dont have an account? Go to register</h5>
                </form>
            </div>
</div>
            </div>
        )
    }
}
