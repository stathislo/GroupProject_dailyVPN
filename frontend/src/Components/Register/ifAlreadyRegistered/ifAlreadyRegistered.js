import React, { Component } from 'react'
import axios from "axios"

export default class ifAlreadyRegistered extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h3>You have already registered. Go to index page</h3>
                <a href="/">Index</a>
            </div>
        )
    }
}
