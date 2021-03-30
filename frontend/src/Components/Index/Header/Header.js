import React, { Component } from 'react'
import './Header.css'




export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    onButtonScroll = () => {
        let elmnt = document.getElementById("pricing");
        elmnt.scrollIntoView(); 
        }


    render() {
        return (
            <div className='Header'>
                <div className="main-header row pos">
                    <div className="col-lg-5 col-md-6 col-sm-6 col-xs-6 " id="title-container">
                        <h1 id="title-header1">High Speed Vpn That Just Rocks </h1>
                        <h2 id="title-header2">Stay Fast Stay Furious</h2>
                        <button onClick={this.onButtonScroll} type="button" className="btn btn-danger btn-lg" id="btn-header">Get DailyVPN Today &#10148;</button>
                    </div>
                    <div className="col-4 header-img">
                    </div>

                </div>
            </div>
        )
    }
}
