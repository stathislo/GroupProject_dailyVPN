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
            <img className='post__image' src={items.image}></img>
            <h5 className='post__catergory'>Category</h5>
                <h2 className='post__h2'>{items.title}</h2>
                <h3 className='post__h3'>{items.description}</h3>
                <p className='posts__p'>{items.date}</p>
            </div>)
        })
        return (
            <div className='showPosts'>
            <div className='posts__search'>
                <input className='posts__searchInput' type='text' name='search' placeholder='Search a post'></input>
                <i className="fas fa-search post__searchIcon"></i>
            </div>
            <div className='getPosts'>
            {getPosts}
            </div>
                
            </div>
        )
    }
}
