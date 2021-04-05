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
                                <li><a href="#">How to</a></li>
                                <li><a href="#">Logout</a></li>
                            </ul>
                    </div>
                    <div className="main_content_middle">  
                        <h3 className="download-card-title-windows">1.Download for Windows</h3>
                        <div className="download-card-windows">
                        <div className="card card-download-windows">
                            <div className="download-card-header-windows"></div>
                            <div className="download-card-body-windows">
                                <a href="#" className="download-text"><div className="download-body-content">Download
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-arrow-down-fill download-icon" viewBox="0 0 16 16">
                                <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
                                </svg>
                                </div></a>
                            </div>
                    </div> 
                       
                    </div>  
                        <h3 className="download-card-title-mac">2.Download for MAC</h3>
                        <div className="download-card-mac">
                        <div className="card card-download-mac">  
                            <div className="download-card-header-mac"></div>
                            <div className="download-card-body-mac">
                            <a href="#" className="download-text"><div className="download-body-content">Download
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-arrow-down-fill download-icon" viewBox="0 0 16 16">
                                <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
                                </svg>
                            </div></a>
                            </div>
                        </div>
                        </div> 
                       
                   
                    </div>
                    <div className="main_content_user_right"></div>
                </div>
            </div>
        )
    }
}