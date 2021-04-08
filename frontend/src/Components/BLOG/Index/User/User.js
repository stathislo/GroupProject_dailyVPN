import React, { Component } from 'react'
import './User.css'
import axios from "axios"

export default class User extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
        
        axios.get("http://localhost:5000/main", { withCredentials:true })
        .then(user=>{
            console.log(user)
            if(user.data==='not loggedin'){
                this.props.history.push("/login")
            }else{
                this.setState({userFirstName:user.data.userFirstName})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render() {
        const userFirstName = this.state.userFirstName
        return (
            <div>
                <div className="main-box">
                    <div className="sidebar-user-left">
                        <div className="logo">
                            <a href="#">{userFirstName}</a>
                        </div>
                            <ul>
                                <li><a href="/userhowto">How to</a></li>
                                <li><a href="/">VpnDaily</a></li>
                                <li><a href="/logout">Logout</a></li>
                            </ul>
                    </div>
                    <div className="main_content_middle">
                   
                    </div>
                    <div className="main_content_user_right"></div>
                </div>
            </div>
        )
    }
}