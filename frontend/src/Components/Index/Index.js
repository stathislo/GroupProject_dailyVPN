import React, { Component } from 'react';
import "./Index.css";
import Nav from "./Nav/Nav"
import Header from './Header/Header'
import Content from './Content/Content'
import Pricing from './Pricing/Pricing'
import Carusel from './Carusel/Carusel'
import Footer from './Footer/Footer'
import Chat from "../Chat/Chat"
import axios from "axios"

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }


    axios.get("http://localhost:5000/indexRedirect", { withCredentials: true })
      .then(checkLogin => {
        console.log(checkLogin)
        if (checkLogin.data === "not loggedin") {
          axios.get("http://localhost:5000/index")
            .then(res => {
              let pIp=document.getElementById("getIp2")
              console.log(res)
              this.setState({ getIp: res.data.ip })
              this.setState({ getIsp: res.data.isp })
              if(res.data.ip === "88.80.186.73"){
                pIp.style.color="green" 
                pIp.textContent="Protected"
             }
            })
            .catch(err => {
              console.log(err)
            })
        } else if (checkLogin.data === "loggedin") {
          axios.get("http://localhost:5000/index")
            .then(res => {
              let pIp=document.getElementById("getIp2")
              console.log(res)
              this.setState({ getIp: res.data.ip })
              this.setState({ getIsp: res.data.isp })
              if(res.data.ip === "88.80.186.73"){
                 pIp.style.color="green"
                 pIp.textContent="Protected" 
              }
            })
            .catch(err => {
              console.log(err)
            })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }


  render() {
    const clientIp = this.state.getIp
    const clientISP = this.state.getIsp
    console.log(clientIp)

    return (
      // IP Code 
      <div id="index">
        <div className='navIp'>
          <p id='getIp'>Your ip address is {clientIp} - {clientISP}- Your Status: <span id="getIp2" className='ispspan'>Unprotected</span></p>
        </div>

        {/* Navbar Code  */}
        <Nav />
        <Chat />

        {/* Header  */}
        <Header />

        {/* VPN Content */}
        <Content />

        {/* Carusel  */}
        <Carusel />

        {/* <!-- Pricing And Buttons --> */}
        <Pricing />

        {/* <!-- Footer --> */}
        
        <Footer />



      </div>
      
    )
  }
}
