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
        })
        .catch(err=>{
            console.log(err)
        })
    }
    

    render() {
        const getPosts = this.state.posts.map(function(items){
            console.log(items.category)
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
            
            return(<div className='posts'>
            <img className='post__image' src={items.image}></img>
            <h5 id='color' className='post__catergory'>{items.category}</h5>
            <input type='hidden' name='categoryid' value={items.categoryId}></input>
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
