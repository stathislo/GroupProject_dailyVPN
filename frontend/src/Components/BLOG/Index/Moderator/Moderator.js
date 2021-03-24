import React, { Component } from 'react'
import "./Moderator.css"

export default class Moderator extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="sidebar">
                        <h3>Moderator Mode</h3>
                        <ul>
                            <li><a href="">Posts</a></li>
                            <li><a href=""> Users</a></li>
                            <li><a href=""> VpnDaily</a></li>
                        </ul>
                    </div>
                    <div className="main_content">

                    </div>
                </div>
            </div>
        )
    }
}