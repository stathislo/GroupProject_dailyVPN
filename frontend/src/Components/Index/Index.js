import React, { Component } from 'react';
import "./Index.css";
import logo from './security.png'
import axios from "axios"

export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        axios.get("http://localhost:5000/index")
            .then(res => {
                console.log(res.data)
                this.setState({ getIp: res.data.ip })
                this.setState({ getIsp: res.data.isp })
            })
            .catch(err => {
                console.log(err)
            })
    }



    onButtonClick = (event) => {
        alert("Clicked!")
    }

    onMenuScroll = () => {
        if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
            alert("kati")
        }
    }
    render() {
        const clientIp = this.state.getIp
        const clientISP = this.state.getIsp
        console.log(clientIp)

        return (
            <div id="index">
                <div className='navIp'>
                    <p id='getIp'>Your ip address is {clientIp} - {clientISP}- Your Status: <span className='ispspan'>Unprotected</span></p>
                </div>

                {/* Navbar Code  */}
                <nav className="navbar navbar-expand-lg navbar-light ">
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
                                <a className="nav-link active" aria-current="page" href="#" style={{ color: '#FFF' }}>Home</a>
                                <a className="nav-link" href="#" style={{ color: '#FFF' }}>Features</a>
                                <a className="nav-link" href="#" style={{ color: '#FFF' }}>Pricing</a>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="main-header row pos">
                    <div className="col-lg-6" id="title-container">
                        <h1 id="title-header1">High Speed Vpn That Just Rocks </h1>
                        <h2 id="title-header2">Stay Fast Stay Furious</h2>

                        <button onClick={this.onButtonClick} type="button" className="btn btn-danger btn-lg" id="btn">Get Your Year Plan+</button>
                    </div>

                </div>

                {/* VPN Content */}

                <section id="content">
                    <div className="row"> 
                        <div className="content4">
                            <div className="content4-text">

                            </div>
                        </div>
                    </div>

                </section>

                {/* <!-- Pricing And Buttons --> */}

                <section id="pricing">

                    <h2 className="text-center">A Plan for Every User's Needs</h2>
                    <h5 className="text-center">Simple and affordable price plans for your Internet Protection.</h5>

                    <div className="row ">
                        <div className="pricing-columns col-lg-4 col-md-6 text-center">
                            <div className="card">
                                <div className="card-header">
                                    <h3>1 Month Plan</h3>
                                </div>
                                <div className="card-body">
                                    <h2>$12.68 <small className="text-muted">/ mo</small></h2>
                                    <h5>Up to 5 Devices</h5>
                                    <h5>Limited Bandwith<small className="text-muted">/ 10Mbps</small></h5>
                                    <h5><small className="text-muted">Save 0%</small></h5>
                                    <button type="button" className="btn btn-outline-primary btn-lg w-100">Sign Up</button>
                                </div>
                            </div>
                        </div>


                        <div className="pricing-columns col-lg-4 col-md-6 text-center">
                            <div className="card">
                                <div className="card-header">
                                    <h3>1 Year Plan</h3>
                                </div>
                                <div className="card-body">
                                    <h2>$6.34 <small className="text-muted">/ mo</small></h2>
                                    <h5>Up to 10 Devices</h5>
                                    <h5>Limited Bandwith<small className="text-muted">/ 20Mbps</small></h5>
                                    <h5><small className="text-muted">Save 50%</small></h5>
                                    <button type="button" className="btn btn-outline-danger w-100 btn-lg">Sign Up</button>
                                </div>
                            </div>
                        </div>

                        <div className="pricing-columns col-lg-4 col-md-12 text-center">
                            <div className="card">
                                <div className="card-header">
                                    <h3>2 Year Plan</h3>
                                </div>
                                <div className="card-body">
                                    <h2>$4.23 <small className="text-muted">/ mo</small></h2>
                                    <h5>Unlimited Devices</h5>
                                    <h5>Unlimited Bandwith<small className="text-muted">/ 200Mbps</small></h5>
                                    <h5><small className="text-muted">Save 66%</small></h5>
                                    <button type="button" className="btn btn-outline-warning btn-lg w-100">Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>




                <div className='dokimi' id='dokimi'>

                    hi
                </div>

            </div>



        )
    }
}
