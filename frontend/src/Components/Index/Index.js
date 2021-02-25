import React, { Component } from 'react';
import "./Index.css";
import logo from './security.png'

export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
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
        return (
            <div id="index">
                <div id="navbar_container">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <div className="container-fluid">
                        <img className='logo-img' src={logo} width="45"  />
                            <a className="navbar-brand" href="#" style={{ color: '#FFF' }}>DailyVPN</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>


                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav ms-auto">
                                    <a className="nav-link active" aria-current="page" href="#" style={{ color: '#FFF' }}>Home</a>
                                    <a className="nav-link"  href="#" style={{ color: '#FFF' }}>Features</a>
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
                </div>



                <div className='dokimi' id='dokimi'>
                  
                    hi
                </div>

            </div>



        )
    }
}
