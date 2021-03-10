import React, { Component } from 'react'
import "./Nav.css"
import Header from "../Header/Header"


export default class Nav extends Component {
    render() {
        return (
            <div className='blog__nav'>
              <div className='blog__navContainer'>
                  <div className='blog__navLeftSide'>
                      <h2 className='blog__navH2'>Logo</h2>
                  </div>
                  <div className='blog__navRightSide'>
                      <ul className='blog__navUl'>
                          <li className='blog__navLi'><a className='blog__navLink'>VPNDAILY</a></li>
                          <li className='blog__navLi'><a className='blog__navLink'>LOGOUT</a></li>
                      </ul>
                  </div>
              </div>
            <Header />
            </div>
        )
    }
}
