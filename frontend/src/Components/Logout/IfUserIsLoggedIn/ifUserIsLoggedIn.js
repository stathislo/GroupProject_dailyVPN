import React, { Component } from 'react'
import axios from 'axios'

export default class ifUserIsLoggedIn extends Component {
    constructor(props){
        super(props)
        this.state ={

        }
        axios.get("http://localhost:5000/main" , { withCredentials:true })
        .then(res=>{
            if(res.data.loggedin==="loggedin"){
                
               }
               else{
                   this.props.history.push("/login")
               }
           })
           .catch(err=>{
               console.log(err)
           }) 
    }
    render() {
        return (
            <div>
                <h3>You are already loggedin. Do you wan't to logout?</h3>
                <a href="/logout">Logout</a>
            </div>
        )
    }
}
