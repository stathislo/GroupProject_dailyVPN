import React, { Component } from 'react'
import "./Nav.css"
import TextImage from "./Images/content1.jpg"

export default class Nav extends Component {
    render() {
        return (
            <div className='nav__container'>
              <div className='header__container'>
                    <div className='header__leftSide'>
                        <h2 className='header__h2'>VPN LOGO</h2>
                    </div>

                    <div className='header__rightSide'>
                        <ul className='header__ul'>
                            <li className='header__li'><a className='header__link' href="">VPN SITE</a></li>
                            <li className='header__li'><a className='header__link' href="">LOGOUT</a></li>
                        </ul>
                    </div>
                </div>

                <div className='header__texts'>
                    <div className='header__textsContainer'>
                        <h4 className='header__textsH4'>Ενα blog για εσενα</h4>
                        <p className='header__textsP'>Νέα, συμβουλες για να εισαι happy online</p>
                    </div>
                    <div className='header__textImage'>
                        <img className='headerTextImg' src={TextImage}></img>
                    </div>
                </div>
            </div>
        )
    }
}
