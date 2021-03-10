import React, { Component } from 'react'
import Header from "./Header/Header"
import Posts from "./Posts/Posts"
import Nav from "./Nav/Nav"
import Categories from "./Categories/Categories"

export default class Index extends Component {
    render() {
        return (
            <div>
            <Nav />
            <Categories />
             <Posts />
            </div>
        )
    }
}
