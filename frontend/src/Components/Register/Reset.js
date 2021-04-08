import React, { Component } from 'react'
import  './Reset.css'
import Logo from "./security.png"

export default class Reset extends Component {
    render() {
        return (
            <div className="reset">
             <div className="reset-container">
                    <div className="reset-left">
                        <img src={Logo}></img>
                    </div>
                    <div className="reset-right">
                        <div>
                        <input className="reset-inputs" type="text" placeholder="New Password"></input>
                        </div>
                        <div>
                        <input className="reset-inputs" type="text" placeholder="Confirm New Password"></input>
                        </div>
                        <div className="reset-btn">
                            <button className="reset-button" type="submit">Continue</button>
                        </div>
                    </div>
             </div> 
            </div>
        )
    }
}
