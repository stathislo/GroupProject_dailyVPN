import React, { Component } from 'react'
import Image from "./content1.jpg"
import "./Header.css"

export default class Header extends Component {
    render() {
        return (
            <div className='blog__header'>
            <div className='blog__headerContainer'>
                <div className='blog__headerTexts'>
                    <h3 className='blog__headerH3'>Welcome to vpndaily blog</h3>
                    <p className='blog__headerP'>Νέα, πληροφορίες, συμβουλές, για να είσαι happy online.</p>
                </div>
                <div className='blog__headerImage'>
                    <img className='blog__headerImg' src='https://www.papaki.com/blog/wp-content/themes/papaki_blog/redesign/img/assets/home_blog.svg'></img>
                </div>
            </div>
            </div>
        )
    }
}
