import React, { Component } from 'react'
import  './Reset.css'
import Logo from "./security.png"
import axios from "axios"

export default class Reset extends Component {
    constructor(props){
        super(props)
        this.state= {
            changeNewPassword:"",
            confirmPassowrd:""
        }
    }

    componentDidMount(){
        axios.get("http://localhost:5000/reset/" + this.props.match.params.id)
        .then(token=>{
            console.log(token.data)
            this.setState({getToken:token.data})
        })
        .catch(err=>{
            console.log(err=404)
            if(err=404){
                this.props.history.push('/error')
            }
        })
    }

    onConfirmPasswordChange = (event) => {
        this.setState({confirmPassowrd: event.target.value})
    }

    onPasswordChange = (event)=>{
        this.setState({changeNewPassword:event.target.value})
    }

    onFormSubmit = (event)=>{
        event.preventDefault()

        var pattern = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{8,19}$/);
        if((this.state.confirmPassowrd === this.state.changeNewPassword) && pattern.test(this.state.changeNewPassword)){
        const newPass= {
            changeNewPassword:this.state.changeNewPassword,
            token:this.state.getToken
        }

        axios.post("http://localhost:5000/resetform", newPass)
        .then(pass=>{
            console.log("Password changed!")
            this.props.history.push("/login")
        })
        .catch(err=>{
            console.log(err)
        })
    }else if(!pattern.test(this.state.changeNewPassword)){
        alert("Password must be at least 8 characters with 1 digit , 1 letter and 1 special character.")
    }else{
        alert("The confirm password does not match.")
    }
}
    render() {
        const getToken = this.state.getToken
        return (
            <div className="reset">
             <div className="reset-container">
                    <div className="reset-left">
                        <img src={Logo}></img>
                    </div>
                    <div className="reset-right">
                    <form onSubmit={this.onFormSubmit}>
                    <input type='hidden' name='token' value={getToken}></input>
                        <div>
                        <input onChange={this.onPasswordChange} className="reset-inputs" type="password" name='changeNewPassword' placeholder="New Password"></input>
                        </div>
                        <div>
                        <input onChange={this.onConfirmPasswordChange} className="reset-inputs" type="password" placeholder="Confirm New Password"></input>
                        </div>
                        <div className="reset-btn">
                            <button className="reset-button" type="submit">Continue</button>
                        </div>
                        </form>
                    </div>
             </div> 
            </div>
        )
    }
}
