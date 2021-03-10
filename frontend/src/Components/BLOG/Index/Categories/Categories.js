import React, { Component } from 'react'
import "./Categories.css"


export default class Categories extends Component {
    render() {
        return (
            <div className='cat'>
                <div className='cat__nav'>
                    <ul className='cat__ul'>
                        <li className='cat__li'><a className='cat__link' href=''>News</a></li>
                        <li className='cat__li'><a className='cat__link' href=''>Security</a></li>
                        <li className='cat__li'><a className='cat__link' href=''>How to</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
