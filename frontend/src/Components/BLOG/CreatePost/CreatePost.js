import React, { Component } from 'react'
import "./CreatePost.css"
import axios from "axios"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import ckeditor, { CKEditor } from "@ckeditor/ckeditor5-react"


export default class CreatePost extends Component {
    constructor(props){
        super(props)
        this.state = {
            title:"",
            description:"",
            image:"",
            category:""
        }
    axios.get("http://localhost:5000/", { withCredentials:true })
    .then(user=>{
        console.log(user)
        if(user.data.loggedin==="loggedin" && user.data.userRole==="moderator"){
            this.setState({email:user.data.user})
            this.setState({userId:user.data.userId})
            this.setState({userFirstName:user.data.userFirstName})
            this.setState({userLastName:user.data.userLastName})
            this.setState({userAvantar:user.data.avantar})
        }else{
            this.props.history.push("/login")
        }

    })
    .catch(err=>{
        console.log(err)
    })    
}

onTitleChange = (event)=>{
    this.setState({title:event.target.value})
}

onDescriptionChange= (event)=>{
    this.setState({description:event.target.value})
}

handleCheckEditorState = (event, editor)=>{
    const data = editor.getData();
    this.setState({
        description:data
    })
}

onImageChange = (event)=>{
    this.setState({image:event.target.value})
}

onCategoryChoose = (event)=>{
    this.setState({category:event.target.value})
}



onPostSubmit = (event)=>{
    event.preventDefault()



    const post = {
        userId:this.state.userId,
        userEmail:this.state.userEmail,
        userFirstName:this.state.userFirstName,
        userLastName:this.state.userLastName,
        userAvantar:this.state.userAvantar,
        title:this.state.title,
        description:this.state.description,
        image:this.state.image,
        category:this.state.category
    }

    axios.post("http://localhost:7000/posts/userCreatesPost", post)
    .then(post=>{
        console.log("post added")
    })
    .catch(err=>{
        console.log(err)
    })
}
    render() {

        return (
            <div className='createPost'>
                <div className='createPost__container'>
                    <div className='createPost__formContainer'>
                        <form onSubmit={this.onPostSubmit} className='createPost__form'>
                            <input type='hidden' name='userEmail' value={this.state.email}></input>
                            <input type='hidden' name='userId' value={this.state.userId}></input>
                            <input type='hidden' name='userFirstName' value={this.state.userFirstName}></input>
                            <input type='hidden' name='userLastName' value={this.state.userLastName}></input>
                            <input type='hidden' name='userAvantar' value={this.state.userAvantar}></input>
                            <div className='createPost__texts'>
                                <h2 className='createPost__h2'>Create a post</h2>
                            </div>
                            <div className='createPost__title'>
                                <h2 className='createPost__h2'>Title</h2>
                                <input onChange={this.onTitleChange} type='text' name='title' placeholder='Title'></input>
                            </div>
                            <div className='createPost__post'>
                            <h2 className='createPost__h2'>Write your post</h2>
                            <CKEditor 
                                editor = {ClassicEditor}
                                onInit = { editor=>{

                                }}
                                onChange ={this.handleCheckEditorState}
                            />
                            
                            {/* <textarea id='textField' onChange={this.onDescriptionChange} type='text' name='description'></textarea> */}
                            </div>
                            <div className='createPost__image'>
                            <h2 className='createPost__h2'>Put an image</h2>
                                <input onChange={this.onImageChange} type='text' name='image' placeholder='Put an image with url'></input>
                            </div>
                            <div className='createPost__category'>
                                <h2 className='createPost__h2'>Choose category</h2>
                                <select onChange={this.onCategoryChoose}>
                                <option>Choose a category</option>
                                    <option name='category' value='how to'>how to</option>
                                    <option name='category' value='security'>security</option>
                                    <option name='category' value='javascript'>javascript</option>
                                    <option name='category' value='nodejs'>nodejs</option>
                                    <option name='category' value='news'>news</option>
                                </select>
                                
                            </div>
                            <div className='createPost__button'>
                                <button type='submit'>Post it</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
