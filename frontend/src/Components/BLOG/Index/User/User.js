import React, { Component } from 'react'
import './User.css'

export default class User extends Component {
    render() {
        return (
            <div>
                <div className="main-box">
                    <div className="sidebar-user">
                        <div className="logo">
                            <a href="#">User#1234</a>
                        </div>
                            <ul>
                                <li><a href="#">Whats on your mind?</a></li>
                                <li><a href="#">News Feed</a></li>
                                <li><a href="#">How to</a></li>
                                <li><a href="#">Logout</a></li>
                            </ul>
                    </div>
                    <div className="main_content_middle"></div>
                    <div className="main_content_user"></div>
                </div>
            </div>
        )
    }
}