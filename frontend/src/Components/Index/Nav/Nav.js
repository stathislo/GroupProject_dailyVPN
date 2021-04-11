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
        let nav=document.getElementById("nav")
        let navLoggedIn = document.getElementById("nav__loggedin")
        let nav__loggedinModerator = document.getElementById("nav__loggedinModerator")
        if(ifUser.data==="not loggedin"){
          navLoggedIn.style.display= "none"
          nav__loggedinModerator.style.display='none'
        }else if(ifUser.data.loggedin==="loggedin" && ifUser.data.user==="user"){
          nav.style.display = "none"
          nav__loggedinModerator.style.display= 'none'
          axios.get("http://localhost:5000/", { withCredentials:true})
          .then(res=>{
            this.setState({email:res.data.user})
          })
        }else if(ifUser.data.loggedin==="loggedin" && ifUser.data.user==="moderator"){
          nav.style.display='none'
          navLoggedIn.style.display='none'
          axios.get("http://localhost:5000/", { withCredentials:true})
          .then(res=>{
            this.setState({email:res.data.user})
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
        <nav id='nav' className="navbar navbar-expand-lg navbar ">
          <div className="container-fluid">
            <img className='logo-img' src={logo} width="45" />
            <a className="navbar-brand" href="/" style={{ color: '#FFF' }}>DailyVPN</a>
            <button className="navbar-toggler custom-toggler  bg-primary" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>


            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <a className="nav-link active" aria-current="page" href="/#content" style={{ color: '#FFF' }}>Features</a>
                <a className="nav-link" href="/#testimonials" style={{ color: '#FFF' }}>Reviews</a>
                <a className="nav-link" href="/#pricing" style={{ color: '#FFF' }}>Pricing</a>
                <a className="nav-link" href="/blog" style={{ color: '#FFF' }}>Blog</a>
                <a className="nav-link" href="/login" style={{ color: '#FFF' }}>Login</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Navbar loggedin  */}
        
        <nav id='nav__loggedin' className="navbar navbar-expand-lg navbar-light nav__loggedin">
          <div className="container-fluid">
            <img className='logo-img' src={logo} width="45" />
            <a className="navbar-brand" href="/" style={{ color: '#FFF' }}>vpnDaily</a>
            <button className="navbar-toggler custom-toggler  bg-primary" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>


            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <a className="nav-link active" aria-current="page" href="/#content" style={{ color: '#FFF' }}>Features</a>
                <a className="nav-link" href="/#testimonials" style={{ color: '#FFF' }}>Reviews</a>
                <a className="nav-link" href="/#pricing" style={{ color: '#FFF' }}>Pricing</a>
                <a className="nav-link" href="/blog" style={{ color: '#FFF' }}>Blog</a>
                <a className="nav-link" href="/user" style={{ color: '#FFF' }}>Welcome {userEmail}</a>
                <a className="nav-link" href="/logout" style={{ color: '#FFF' }}>Logout</a>
              </div>
            </div>
          </div>
        </nav>
        
      {/* Navbar loggedin for moderator */}
      <nav id='nav__loggedinModerator' className="navbar navbar-expand-lg navbar-light nav__loggedin">
          <div className="container-fluid">
            <img className='logo-img' src={logo} width="45" />
            <a className="navbar-brand" href="/" style={{ color: '#FFF' }}>DailyVPN</a>
            <button className="navbar-toggler custom-toggler  bg-primary" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>


            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <a className="nav-link active" aria-current="page" href="/#content" style={{ color: '#FFF' }}>Features</a>
                <a className="nav-link" href="/#testimonials" style={{ color: '#FFF' }}>Reviews</a>
                <a className="nav-link" href="/#pricing" style={{ color: '#FFF' }}>Pricing</a>
                <a className="nav-link" href="/blog" style={{ color: '#FFF' }}>Blog</a>
                {/* <a className="nav-link" href="/moderator" style={{ color: '#FFF' }}>Moderator Panel</a> */}
                <a className="nav-link" href="/moderator" style={{ color: '#FFF' }}>Welcome {userEmail}</a>
                <a className="nav-link" href="/logout" style={{ color: '#FFF' }}>Logout</a>
              </div>
            </div>
          </div>
        </nav>

      </div>
    )
  }
}


    





 





