import React, { Component } from 'react'
import "./Moderator_Posts.css"
import axios from 'axios'

 
export default class Moderator_Posts extends Component {
 constructor(props){
 super(props)
 this.state = {
    posts:[]
 }
 
 axios.get("http://localhost:5000/main" , { withCredentials:true })
    .then(res=>{
    console.log(res)
    })
    .catch(err=>{
    console.log(err)
    }) 
 }


 onButtonClick = (event)=>{
     event.preventDefault()

     axios.get("http://localhost:7000/posts")
     .then(posts=>{
         //console.log(posts)
         this.setState({posts:posts.data})
     })
     .catch(err=>{
         console.log(err)
     })
 }


//  componentDidMount(){
//     axios.get("http://localhost:7000/posts")
//     .then(posts=>{
//         //console.log(posts)
//         this.setState({posts:posts.data})
//     })
//     .catch(err=>{
//         console.log(err)
//     })
//  }

//  componentDidUpdate(prevState){
//     if(this.state.posts !== prevState.posts){
//         console.log("changed")
        
//         axios.get("http://localhost:7000/posts")
//         .then(posts=>{
//             //console.log(posts)
//             this.setState({posts:posts.data})
//         })
//         .catch(err=>{
//             console.log(err)
//         })
//     }
//     console.warn(prevState)
    
// }


 render() {
     const posts = this.state.posts.map(items=>{
         console.log(items)
         return(<div className='moderatorPosts'>
                <div id={items._id} className='moderatorPosts__container'>
                <input name='postdelete' type='hidden' value={items._id}></input>
                    <a className='moderatorPosts__link'>{items.title}</a>
                    <button type='button' onClick={function(event){
                        // event.preventDefault()
                        let moderatorPosts = document.getElementById(`${items._id}`)
                        // for(let moderatorPosts1 of moderatorPosts){
                        //     console.log(moderatorPosts1.childNodes[0].childNodes[2])
                        //     console.log(moderatorPosts1.childNodes[0].childNodes[1])
                        //     moderatorPosts1.childNodes[0].childNodes[2].addEventListener("click", function(){
                        //         moderatorPosts1.childNodes[0].childNodes[1].remove()
                        //     })
                        // }
                        moderatorPosts.remove()
                        axios.delete(`http://localhost:7000/posts/delete/${items._id}`)
                        .then(deletepost=>{
                            console.log("Post deleted!")
                        })
                        .catch(err=>{
                            console.log(err)
                        })
                    }}>Delete</button>
                </div>
         </div>)
     })
 return (
 <div>
 <div className="wrapper">
 <div className="sidebar-moderator-left">
 <h3>Moderator Mode</h3>
 <ul>
 <li className='moderator__li' ><a href="/moderatorposts">- Posts</a></li>
 <li className='moderator__li'><a href="/moderatorusers">- Users</a></li>
 <li className='moderator__li'><a href="/">- VpnDaily</a></li>
 <li className='moderator__li'><a href="/moderatorchat">- Chat</a></li>
 </ul>
 </div>
 <div className="main_content_moderator_middle">
 <h2 className="text-post">Show all posts</h2>
 <div>
 <button onClick={this.onButtonClick} type="Submit" className="show-button">Posts</button>
 {posts}
 </div>
 </div>
 <div className="main_content_moderator_right">
    
 </div>
 </div>
 </div>
 )
 }
}