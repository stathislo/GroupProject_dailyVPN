import React, { Component } from 'react'
import './User.css'

export default class User extends Component {
    render() {
        return (
            <div>
                <div className="main-box">
                    <div className="sidebar-user-left">
                        <div className="logo">
                            <a href="#">User#1234</a>
                        </div>
                            <ul>
                                <li><a href="/userhowto">How to</a></li>
                                <li><a href="/">VpnDaily</a></li>
                                <li><a href="/logout">Logout</a></li>
                            </ul>
                    </div>
                    <div className="main_content_middle">
                   
                    </div>
                    <div className="main_content_user_right"></div>
                </div>
            </div>
        )
    }
}