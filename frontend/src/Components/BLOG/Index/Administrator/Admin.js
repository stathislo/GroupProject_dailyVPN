import React, { Component } from 'react'
import "./Admin.css"

export default class Admin extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="sidebar">
                        <h3>Administrator Mode</h3>
                        <ul>
                            <li><a href="">Posts</a></li>
                            <li><a href=""> Users</a></li>
                            <li><a href=""> VpnDaily</a></li>
                            <li><a href=""> Moderators</a></li>
                        </ul>
                    </div>
                    <div className="main_content_center"></div>
                    <div className="main_content_ad"></div>

                </div>
            </div>
        )
    }
}