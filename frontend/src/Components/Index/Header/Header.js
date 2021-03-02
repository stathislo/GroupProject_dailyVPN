import React, { Component } from 'react'
import './Header.css'



export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        return (
            <div className='Header'>
                <div className="main-header row pos">
                    <div className="col-lg-6 col-md-6 col-sm-8 col-8" id="title-container">
                        <h1 id="title-header1">High Speed Vpn That Just Rocks </h1>
                        <h2 id="title-header2">Stay Fast Stay Furious</h2>

                        <button onClick={this.onButtonClick} type="button" className="btn btn-danger btn-lg" id="btn-header">Get DailyVPN</button>
                    </div>

                </div>
            </div>
        )
    }
}
