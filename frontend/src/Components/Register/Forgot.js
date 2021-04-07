import React, { Component } from 'react'
import "./Forgot.css"
import logo from "../../Components/Index/Images/security.png"
import axios from "axios"

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            token: ""
        }

        axios.get("http://localhost:5000/alreadyregistered", { withCredentials: true })
            .then(ifAlreadyRegister => {
                console.log(ifAlreadyRegister)
                if (ifAlreadyRegister.data === "not loggedin") {
                    this.props.history.push("/forgot")
                } else if (ifAlreadyRegister.data === "loggedin") {
                    this.props.history.push("/alreadyregister")
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
        console.log(event.target.value)
    }

    onTokenChange = (event) => {
        this.setState({ token: event.target.value })
    }

    onSubmitForm = (event) => {
        event.preventDefault()
        const user = {
            email: this.state.email,
            token: this.state.token
        }

        axios.post("http://localhost:5000/registerform", user)
            .then(res => {
                console.log("User created!!")
                const message = document.getElementById("message").textContent = "Check your email for confirmation"
            })
            .catch(err => {
                console.log(err)
            })
    }


    render() {
        return (
            <div className='forgot'>
                <div className='register__container'>
                    <div className='register__leftSide'>
                        <img className='register__logo' src={logo}></img>
                    </div>
                    <div className='register__rightSide'>
                        <form onSubmit={this.onSubmitForm} className='register__form'>
                            <div className='register__textsAndLogo'>
                                <h2 className='register__h2'>Forgot Password?</h2>
                            </div>
                            <div className='register__email'>
                                <input onChange={this.onEmailChange} className='register__input' type='email' placeholder='Write your email' name="email"></input>
                            </div>
                            <input onChange={this.onTokenChange} type='hidden' name='token' value=""></input>
                            <h4 id="message"></h4>
                            <div className='register__button'>
                                <button className='register__btn' type='submit'>Continue</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
