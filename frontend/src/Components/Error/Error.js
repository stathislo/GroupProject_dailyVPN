import React, { Component } from 'react';
import image from "./error.png";
import "./Error.css"
 
export default class Error extends Component {
 render() {
 return (
 <div className="error">
 <div className="error-left">
 <h1 className="oops">Ooops!</h1>
 <h4 >We can't seem to find the page you're looking for.</h4>
 <h4><a href="/">Home...</a></h4>
 </div>
 <div className="error-right">
 <img className="error-image" src={image}/>
 </div>
 </div>
 )
 }
}
