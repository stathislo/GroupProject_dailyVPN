import React, { Component } from 'react'
import "./Categories.css"


export default class Categories extends Component {
    render() {
        return (
            <div className='blog__cat'>
                <div className='blog__catnav'>
                    <ul className='blog__catul'>
                        <li className='blog__catli'><a className='blog__catlink' href=''>News</a></li>
                        <li className='blog__catli'><a className='blog__catlink' href=''>Security</a></li>
                        <li className='blog__catli'><a className='blog__catlink' href=''>How to</a></li>
                        <li className='blog__catli'><a className='blog__catlink' href=''>Node JS</a></li>
                        <li className='blog__catli'><a className='blog__catlink' href=''>Javascript</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
