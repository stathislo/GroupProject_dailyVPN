import React, { Component } from 'react'
import "./Categories.css"


export default class Categories extends Component {
    render() {
        return (
            <div className='blog__cat'>
                <div className='blog__catnav'>
                    <ul className='blog__catul'>
                        <li className='blog__catli'><a className='blog__catlink' href='/blog'>All</a></li>
                        <li className='blog__catli'><a className='blog__catlink' href='/category/news'>News</a></li>
                        <li className='blog__catli'><a className='blog__catlink' href='/category/security'>Security</a></li>
                        <li className='blog__catli'><a className='blog__catlink' href='/userhowto'>How to</a></li>
                        <li className='blog__catli'><a className='blog__catlink' href='/category/nodejs'>Node JS</a></li>
                        <li className='blog__catli'><a className='blog__catlink' href='/category/javascript'>Javascript</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
