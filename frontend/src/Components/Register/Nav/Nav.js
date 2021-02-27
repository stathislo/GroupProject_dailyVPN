import React, { Component } from 'react'
import "./Nav.css"
import logo from './security.png'

export default class Nav extends Component {
    render() {
        return (
            <div className='nav'>
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
            </div>
        )
    }
}
