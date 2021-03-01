import React, { Component } from 'react'

export default class ifUserIsLoggedIn extends Component {
    render() {
        return (
            <div>
                <h3>You are already loggedin. Do you wan't to logout?</h3>
                <a href="/logout">Logout</a>
            </div>
        )
    }
}
