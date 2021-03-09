import React, { Component } from 'react';
import "./Index.css";
import Nav from "./Nav/Nav"
import Header from './Header/Header'
import Content from './Content/Content'
import Pricing from './Pricing/Pricing'
import Carusel from './Carusel/Carusel'
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
              console.log(res)
              this.setState({ getIp: res.data.ip })
              this.setState({ getIsp: res.data.isp })
            })
            .catch(err => {
              console.log(err)
            })
        } else if (checkLogin.data === "loggedin") {
          
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
          <p id='getIp'>Your ip address is {clientIp} - {clientISP}- Your Status: <span className='ispspan'>Unprotected</span></p>
        </div>

        {/* Navbar Code  */}
        <Nav />

        {/* Header  */}
        <Header />

        {/* VPN Content */}
        <Content />

        {/* Carusel  */}
        <Carusel />

        {/* <!-- Pricing And Buttons --> */}
        <Pricing />


        <div className='dokimi' id='dokimi'>

          hi
                </div>

      </div>



    )
  }
}
