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
            this.setState({posts:res.data})
            let color = document.querySelectorAll(".posts")
            for(let colors of color){
                console.log(colors.childNodes[1])
                if(colors.childNodes[1].textContent==="security"){
                    colors.childNodes[1].style.backgroundColor = "green"
                }else if(colors.childNodes[1].textContent==="news"){
                    colors.childNodes[1].style.backgroundColor = "blue"
                }else if(colors.childNodes[1].textContent==="javascript"){
                    colors.childNodes[1].style.backgroundColor = "orange"
                }else if(colors.childNodes[1].textContent==="nodejs"){
                    colors.childNodes[1].style.backgroundColor = "gold"
                }else if(colors.childNodes[1].textContent==="how to"){
                    colors.childNodes[1].style.backgroundColor = "aqua"
                }
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    

    render() {
        const getPosts = this.state.posts.map(function(items){
            console.log(items)
            return(<div className='posts'>
            <img className='post__image' src={items.image}></img>
            <h5 id='color' className='post__catergory'>{items.category}</h5>
            <input type='hidden' name='postsId' value={items._id}></input>
            <input type='hidden' name='categoryid' value={items.categoryId}></input>
                <a href={"/posts/" + items._id} className='post__h2'>{items.title}</a>
                <h3 className='post__h3'><a href={"/posts/" + items._id}>{items.description.slice(0,50)}..</a></h3>
                <p className='posts__p'>Date Posted: {items.date.slice(0,10)} <span>{items.date.slice(11,16)}</span></p>
                
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
