import React, { Component } from 'react'
import "./Nav.css"
import logo from '../Images/security.png'
import axios from "axios"


export default class Nav extends Component {
    constructor(props){
      super(props)
      this.state = {
        
      }

      axios.get("http://localhost:5000/main", {withCredentials:true})
      .then(ifUser=>{
        console.log(ifUser)
        let nav=document.getElementById("nav")
        let navLoggedIn = document.getElementById("nav__loggedin")
        if(ifUser.data==="not loggedin"){
          navLoggedIn.style.display= "none"
        }else if(ifUser.data==="loggedin"){
          nav.style.display = "none"
          axios.get("http://localhost:5000/", { withCredentials:true})
          .then(res=>{
            this.setState({email:res.data.user.email})
          })
        }
      })
      .catch(err=>{
        console.log(err)
      })
    }


  render() {

    const userEmail = this.state.email
    return (
      <div className="nav">
        <nav id='nav' className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <img className='logo-img' src={logo} width="45" />
            <a className="navbar-brand" href="#" style={{ color: '#FFF' }}>DailyVPN</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>


            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <a className="nav-link active" aria-current="page" href="#" style={{ color: '#FFF' }}>Features</a>
                <a className="nav-link" href="#" style={{ color: '#FFF' }}>Reviews</a>
                <a className="nav-link" href="#" style={{ color: '#FFF' }}>Pricing</a>
                <a className="nav-link" href="/blog" style={{ color: '#FFF' }}>Blog</a>
                <a className="nav-link" href="#" style={{ color: '#FFF' }}>Login</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Navbar loggedin  */}
        
        <nav id='nav__loggedin' className="navbar navbar-expand-lg navbar-light nav__loggedin">
          <div className="container-fluid">
            <img className='logo-img' src={logo} width="45" />
            <a className="navbar-brand" href="#" style={{ color: '#FFF' }}>DailyVPN</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>


            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <a className="nav-link active" aria-current="page" href="#" style={{ color: '#FFF' }}>Features</a>
                <a className="nav-link" href="#" style={{ color: '#FFF' }}>Reviews</a>
                <a className="nav-link" href="#" style={{ color: '#FFF' }}>Pricing</a>
                <a className="nav-link" href="/blog" style={{ color: '#FFF' }}>Blog</a>
                <a className="nav-link" href="#" style={{ color: '#FFF' }}>Welcome {userEmail}</a>
              </div>
            </div>
          </div>
        </nav>
        

      </div>
    )
  }
}






