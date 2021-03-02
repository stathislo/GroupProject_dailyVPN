import React, { Component } from 'react'
import "./Logout.css"
import axios from "axios"

export default class Logout extends Component {
    constructor(props){
        super(props)
        this.state = {

        }

        axios.get("http://localhost:5000/logout", { withCredentials:true})
        .then(logout=>{
            console.log(logout)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div className='logout'>
                <div className='logout__container'>
                    Logout
                </div>
            </div>
        )
    }
}
