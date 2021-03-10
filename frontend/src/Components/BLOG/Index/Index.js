import React, { Component } from 'react'
import Header from "./Header/Header"
import Posts from "./Posts/Posts"

export default class Index extends Component {
    render() {
        return (
            <div>
                <Header />
                <Posts />
            </div>
        )
    }
}
