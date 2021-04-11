import React, { Component } from 'react'
import './User.css'
import savefile from "./savefile.png"
import install from "./install.png"
import imports from "./import.png"
import choose from "./choose.png"
import file from "./file.png"
import connect from "./connect.png"
import axios from "axios"

export default class User extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
        
        axios.get("http://localhost:5000/main", { withCredentials:true })
        .then(user=>{
            console.log(user)
            if(user.data==='not loggedin'){
                this.props.history.push("/login")
            }else if(user.data.loggedin==='loggedin' && user.data.user ==='user'){
                this.setState({userFirstName:user.data.userFirstName})
            }else{
                this.props.history.push('/login')
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render() {
        const userFirstName = this.state.userFirstName
        return (
            <div>
                <div className="main-box">
                    <div className="sidebar-user-left">
                        <div className="logo">
                            <a href="#">{userFirstName}</a>
                        </div>
                            <ul>
                                <li><a href="/">VpnDaily</a></li>
                                <li><a href="/logout">Logout</a></li>
                            </ul>
                    </div>
                    <div className="main_content_middle">
                    <h3 className="steps">1.Download</h3>
                        <div className="download-card-windows">
                        <div className="card card-download-windows">
                            <div className="download-card-header-windows"></div>
                            <div className="download-card-body-windows">
                                <a href="https://openvpn.net/community-downloads/" className="download-text"><div className="download-body-content">Download
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-arrow-down-fill download-icon" viewBox="0 0 16 16">
                                <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
                                </svg>
                                </div></a>
                            </div>
                    </div> 
                    </div>  

                    <div className="steps-container">
                        <h3 className="steps-choose">2.Choose download</h3>
                        <img className="steps-image-savefile" src={choose}></img>
                    </div>

                    <div className="steps-container">
                        <h3 className="steps">3.Click save file</h3>
                        <img className="steps-image-savefile" src={savefile}></img>
                    </div>

                    <div className="steps-container">
                        <h3 className="steps">4.Click Install</h3>
                        <img className="steps-image-install" src={install}></img>
                    </div>

                    <h3 className="steps">5.Download client</h3>
                        <div className="download-card-windows">
                        <div className="card card-download-windows">
                            <div className="download-card-header-client"><img className="client-img"></img></div>
                            <div className="download-card-body-windows">
                                <a href="client.ovpn" download="client"   className="download-text">
                                <div className="download-body-content">Download
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-arrow-down-fill download-icon" viewBox="0 0 16 16">
                                <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
                                </svg>
                                </div></a>
                            </div>
                            </div>  
                            </div>  
                           

                    <div className="steps-container">
                        <h3 className="steps-import">6.Import file </h3>
                        <img className="steps-image-imports" src={imports}></img>
                    </div>
                    <div className="steps-container">
                        <h3 className="steps">7.Click file </h3>
                        <img className="steps-image-imports" src={file}></img>
                    </div>
                    <div className="steps-container">
                        <h3 className="steps">8.Connect </h3>
                        <img className="steps-image-imports" src={connect}></img>
                    </div>
                    </div>
                    <div className="main_content_user_right"></div>
                </div>
            </div>
        )
    }
}