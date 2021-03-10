import React, { Component } from 'react'
import "./Posts.css"
import axios from "axios"

export default class Posts extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts:[]
        }
    }

    componentDidMount(){
        axios.get("http://localhost:7000/posts/")
        .then(res=>{
            console.log(res.data)
            this.setState({posts:res.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render() {
        const getPosts = this.state.posts.map(function(items){
            console.log(items.date)
            return(<div className='posts'>
                <h1>{items.title}</h1>
                <h3>{items.description}</h3>
                <p className='posts__p'>{items.date}</p>
            </div>)
        })
        return (
            <div className='getPosts'>
                {getPosts}
            </div>
        )
    }
}
