import React, { Component } from 'react'
import "./Moderator.css"
import axios from 'axios'

export default class Moderator extends Component {
    constructor(props){
        super(props)
        this.steate = {

        }

       axios.get("http://localhost:5000/main" , { withCredentials:true })
       .then(res=>{
           console.log(res)
           if(res.data.user ==='moderator' && res.data.loggedin==="loggedin"){
            console.log('komple')
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
                <div className="wrapper">
                    <div className="sidebar-moderator-left">
                        <h3>Moderator Mode</h3>
                        <ul>
                            <li className='moderator__li'><a href="/moderatorposts">- Posts</a></li>
                            <li className='moderator__li'><a href="/">- VpnDaily</a></li>
                            <li className='moderator__li'><a href="/moderatorchat">- Chat</a></li>
                        </ul>
                    </div>
                    <div className="main_content_moderator_middle"></div>
                    <div className="main_content_moderator_right">
                        
                    </div>
                </div>
            </div>
        )
    }
}