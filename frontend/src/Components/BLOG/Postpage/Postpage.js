import React, { Component } from 'react'
import axios from "axios"
import Nav from "../Index/Nav/Nav"
import "./Postpage.css"

export default class Postpage extends Component {
    constructor(props){
        super(props)
        this.state = {

        }

        axios.get("http://localhost:7000/posts/" + this.props.match.params.postId)
        .then(post=>{
            console.log(post)
            this.setState({title:post.data.title})
            this.setState({description:post.data.description})
            this.setState({image:post.data.image})
            this.setState({category:post.data.category})
            this.setState({user:post.data.user})
            this.setState({date:post.data.date.slice(0,10)})
        })
        .catch(err=>{
            console.log(err)
        })

        axios.get("http://localhost:5000/", { withCredentials:true })
        .then(user=>{
            if(user.data.loggedin==="not loggedin"){
                this.props.history.push("/login")
            }else{
                this.setState({userEmail:user.data.user.email})
            }
        })
        .catch(err=>{
            console.log(err)
        })
}
componentDidMount(){

}

render() {
const title = this.state.title;
const description = this.state.description
const image = this.state.image
const category = this.state.category
const userId = this.state.user
const date = this.state.date

const userMail = this.state.userEmail


        return (
            <div className='onePost'>
            <input type='hidden' name='userId' value={userId}></input>
            <div className='onePost__nav'>
              <div className='blog__navContainer'>
                  <div className='blog__navLeftSide'>
                      <h2 className='blog__navH2'>Logo</h2>
                  </div>
                  <div className='blog__navRightSide'>
                      <ul className='blog__navUl'>
                      <li className='blog__navLi'><a className='blog__navLink'>{userMail}</a></li>
                          <li className='blog__navLi'><a href='/' className='blog__navLink'>VPNDAILY</a></li>
                          <li className='blog__navLi'><a href='/blog' className='blog__navLink'>BLOG</a></li>
                          <li className='blog__navLi'><a href='/logout' className='blog__navLink'>LOGOUT</a></li>
                          
                      </ul>
                  </div>
              </div>
              <div className='onePost__headerText'>
                  <h2 className='onePost__h2'>{title}</h2>
              </div>
            </div>

            <div className='onePost__post'>
                <div className='onePost__postContainer'>
                    <div className='onePost__leftSide'>
                    <div className='onePost__avantar'>
                        <img src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' className='onePost__ava'></img>
                    </div>
                    <div className='onePost__userName'>
                        <h3 className='onePost__h3'>Name</h3>
                    </div>
                    <div className='onePost__posteDate'>
                        <h5 className='onePost__h5'>{date}</h5>
                    </div>
                    <div className='onePost__category'>
                        <h5 className='onePost__h5'>{category}</h5>
                    </div>
                    </div>
                    <div className='onePost__rightSide'>
                        <div className='onePost__image'>
                            <img className='onePost__img' src={image}></img>
                        </div>

                    </div>
                    
                </div>
                <div class='onePost_title'>
                    <h2 class='onePost__h2'>{title}</h2>
                </div>
                <div class='onePost__desc'>
                    <h5 class='onePost__h5'>{description}</h5>
                </div>
            </div>

            </div>
        )
    }
}
