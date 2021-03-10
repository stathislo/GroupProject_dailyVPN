import React, { Component } from 'react'
import Nav from "../Nav/Nav"
import Categories from "../Categories/Categories"

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Nav />
                <Categories />
            </div>
        )
    }
}
