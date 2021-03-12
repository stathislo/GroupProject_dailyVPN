import React, { Component } from 'react'
import "./Nav.css"
import Header from "../Header/Header"
import axios from "axios"


export default class Nav extends Component {
    constructor(props){
        super(props)
        this.state = {

        }

        axios.get("http://localhost:5000", { withCredentials:true })
        .then(user=>{
            console.log(user)
            this.setState({email:user.data.user})
            if(user.data.userRole==="moderator"){
                let createPost = document.getElementById("createPost").style.display='contents'
                let moderatorPanel = document.getElementById("moderatorPanel").style.display='contents'
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render() {
        const userEmail = this.state.email
        return (
            <div className='blog__nav'>
              <div className='blog__navContainer'>
                  <div className='blog__navLeftSide'>
                      <h2 className='blog__navH2'>Logo</h2>
                  </div>
                  <div className='blog__navRightSide'>
                      <ul className='blog__navUl'>
                      <li className='blog__navLi'><a className='blog__navLink'>Welcome {userEmail}</a></li>
                          <li className='blog__navLi'><a href='/' className='blog__navLink'>VPNDAILY</a></li>
                          <li id='createPost' className='blog__navLi'><a href='/createpost' className='blog__navLink'>CREATE POST</a></li>
                          <li id='moderatorPanel' className='blog__navLi'><a href='/' className='blog__navLink'>MODERATOR PANEL</a></li>
                          <li className='blog__navLi'><a href='logout' className='blog__navLink'>LOGOUT</a></li>
                          
                      </ul>
                  </div>
              </div>
            <Header />
            </div>
        )
    }
}
