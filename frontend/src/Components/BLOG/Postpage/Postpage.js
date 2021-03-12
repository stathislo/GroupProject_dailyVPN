import React, { Component } from 'react'
import axios from "axios"
import Nav from "../Index/Nav/Nav"
import "./Postpage.css"

export default class Postpage extends Component {
    constructor(props){
        super(props)

        this.state = {

        }

        axios.get("http://localhost:5000/", { withCredentials:true })
        .then(user=>{
            console.log(user)
            if(user.data.loggedin==="not loggedin"){
                this.props.history.push("/login")
            }else if(user.data.loggedin==='loggedin'){
                this.setState({userEmail:user.data.user})
                this.setState({userFirstName:user.data.userFirstName})
                this.setState({userLastName:user.data.userLastName})
                this.setState({userId:user.data.userId})
                this.setState({avantar:user.data.avantar})
                
        axios.get("http://localhost:7000/posts/" + this.props.match.params.postId)
        .then(post=>{
            console.log(post.data.category)
            this.setState({title:post.data.title})
            this.setState({description:post.data.description})
            this.setState({image:post.data.image})
            this.setState({category:post.data.category})
            this.setState({user:post.data.user})
            this.setState({date:post.data.date.slice(0,10)})

            let onePost__category = document.getElementById("onePost__category")
            if(onePost__category.textContent==="news"){
                onePost__category.style.backgroundColor = "blue"
            }else if(onePost__category.textContent==='security'){
                onePost__category.style.backgroundColor = "green"
            }else if(onePost__category.textContent==='javascript'){
                onePost__category.style.backgroundColor = "orange"
            }else if(onePost__category.textContent==='nodejs'){
                onePost__category.style.backgroundColor = "gold"
            }else if(onePost__category.textContent==='how to'){
                onePost__category.style.backgroundColor = 'aqua'
            }
        })
        .catch(err=>{
            console.log(err)
        })
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

//

const userMail = this.state.userEmail

const userFirstName = this.state.userFirstName
const userLastName = this.state.userLastName
const getUserId = this.state.userId
const userAvantar = this.state.avantar


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
                        <img src={userAvantar} className='onePost__ava'></img>
                    </div>
                    <div className='onePost__userName'>
                    <input type='hidden' name='userId' value={getUserId}></input>
                        <h5 className='onePost__p1'>{userFirstName} {userLastName}</h5>
                    </div>
                    <div className='onePost__posteDate'>
                        <h5 className='onePost__p'>{date}</h5>
                    </div>
                    <div className='onePost__category'>
                        <h5 id='onePost__category' className='onePost__h5_cat'>{category}</h5>
                    </div>
                    <hr></hr>
                    <div className='onePost__share'>
                        <p className='onePost__shareP'>Share with</p>
                    </div>
                    <div className='onePost__icons'>
                    <i class="fab fa-facebook fa-2x onePost__fb"></i>
                    <i class="fab fa-twitter fa-2x onePost__twi"></i>
                    <i class="fab fa-linkedin fa-2x onePost__linked"></i>
                    </div>
                    </div>
                    <div className='onePost__rightSide'>
                        <div className='onePost__image'>
                            <img className='onePost__img' src={image}></img>
                        </div>
                        <div className='onePost__rightSideTexts'>
                        <div class='onePost_title'>
                    <h2 class='onePost__h2'>{title}</h2>
                </div>
                <div class='onePost__desc'>
                    <div class='onePost__h4'>{description}</div>
                </div>
                        </div>
                    </div>
                    
                </div>

            </div>

            </div>
        )
    }
}
