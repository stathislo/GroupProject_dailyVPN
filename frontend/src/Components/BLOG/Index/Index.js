import React, { Component } from 'react'
import Header from "./Header/Header"
import Posts from "./Posts/Posts"
import Nav from "./Nav/Nav"
import Categories from "./Categories/Categories"
import axios from "axios"

export default class Index extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
     
        axios.get("http://localhost:5000/main", {withCredentials:true})
        .then(res=>{
            console.log(res)
            if(res.data==='loggedin'){
                this.props.history.push("/blog")
            }else if(res.data==='not loggedin'){
                this.props.history.push("/login")
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

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
