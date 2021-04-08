import React, { Component } from 'react'
import  './Reset.css'
import Logo from "./security.png"
import axios from "axios"

export default class Reset extends Component {
    constructor(props){
        super(props)
        this.state= {
            changeNewPassword:""
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

    onPasswordChange = (event)=>{
        this.setState({changeNewPassword:event.target.value})
    }

    onFormSubmit = (event)=>{
        event.preventDefault()

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
                        <input className="reset-inputs" type="password" placeholder="Confirm New Password"></input>
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
