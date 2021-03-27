import axios from 'axios'
import React, { Component } from 'react'
import "./Chat.css"
import openSocket from "socket.io-client"



export default class Chat extends Component {
    constructor(props){
        super(props)

        this.state = {
            messagesSender:"",
            getChats:[],
            getAllChats1:[],
            getAllChats2:[],
            postChat:[],
            postBody:[]
        }

        axios.get("http://localhost:5000/main" , { withCredentials:true })
        .then(res=>{
            
            if(res.data.loggedin==='loggedin' && res.data.user==="user"){
                this.setState({userId:res.data.userId})
                const socket = openSocket("http://localhost:5000")
                socket.on("connection", data=>{
                    console.log(data)
                })
            }else{
                let chat = document.getElementById("chat").style.display ='none'
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    onChatClick =()=>{
        const chat__showHelp = document.getElementById("chat__showHelp")
        const chat__Chat = document.getElementById("chat__Chat")

        chat__showHelp.classList.toggle('chat__showHelp__after')
        chat__Chat.classList.toggle("chat__Chat__after")
    }

    onMinimizeClick = ()=>{
        const chat__showHelp = document.getElementById("chat__showHelp")
        const chat__Chat = document.getElementById("chat__Chat")

        if(chat__showHelp.className=="chat__showHelp chat__showHelp__after"){
            chat__showHelp.classList.remove("chat__showHelp__after")
            chat__Chat.classList.remove("chat__Chat__after")
        }
        // chat__showHelp.style.display('chat__showHelp')
        // chat__Chat.classList.toggle("chat__Chat")
    }

    onChatInputChange = (event)=>{
        this.setState({messagesSender:event.target.value})
    }

    // onChatSend = (event)=>{
    //     event.preventDefault()

        
    //     let chatUserInput = document.getElementById("chatUserInput").value=''

    //     const chat = {
    //         senderUserId:this.state.userId,
    //         messagesSender:this.state.messagesSender
    //     }

    //     axios.post("http://localhost:5000/postuserchat", chat, { withCredentials:true })
    //     .then(resChat=>{
    //         console.log("chat sended!")

    //         const socket = openSocket("http://localhost:5000")
    //         socket.on("chatMessage", data=>{
    //             console.log(data)
    //             if(data.action==='putNewChat'){
    //                 console.log(data)
    //                 this.setState({postChat:data.findUserMessage.messagesSender})
    //             }
    //         })
        

            
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // }

    onChatSend = async(event)=>{
        event.preventDefault()
 
        
        let chatUserInput = document.getElementById("chatUserInput").value=''
 
        const chat = {
            senderUserId:this.state.userId,
            messagesSender:this.state.messagesSender
        }
 
        let showUserChats = document.querySelectorAll(".showUserChats")
        for(let deleteShowUsers of showUserChats){
            deleteShowUsers.style.display = 'none'
        }
        console.log(showUserChats)
        axios.post("http://localhost:5000/postuserchat", chat, { withCredentials:true })
        .then(resChat=>{
            console.log("chat sended!")
 
            // this.asd()
            // const socket = openSocket("http://localhost:5000")
            //  socket.on("chatMessage", data=>{
            //     console.log(data)
            //     if(data.action==='putNewChat'){
            //         console.log(data)
            //         this.setState({postChat:data.findUserMessage.messagesSender})
            //         //console.log(this.postChat)
            //     }
            // })
            
        })
        .catch(err=>{
            console.log(err)
        })
 
        const socket =  openSocket("http://localhost:5000")
           await  socket.on("chatMessage", data=>{
                console.log(data.body)
                if(data.action==='putNewChat'){
                    
                    console.log(data)
                    this.setState({postChat:data.findUserMessage.messagesSender})
                    this.setState({postBody:data.body})
                    //console.log(this.postChat)
                }
            })
    }

    componentDidMount(){
        
        axios.get("http://localhost:5000/getusermessages", { withCredentials:true })
        .then(getChats=>{
            
            const socket = openSocket("http://localhost:5000/")
            
            socket.on("showChats", data=>{
                if(data.action==="getChats"){
                    this.setState({getAllChats1:data.getAllMessage.messagesSender})
                    
                    console.log(data.getAllMessage)
                
                    
                    //console.log(data.getAllMessage.messagesSender)
                    //console.log(this.state.getAllChats)
                }
            })
            this.setState({getChats:getChats.data.getMessage.messagesSender})
            this.setState({getAllChats2:getChats.data.getMessage.messageReceive})
           
            this.setState({getUserChatFirstname:getChats.data.getMessage.senderUserId.firstName})
            this.setState({getUserChatLastName:getChats.data.getMessage.senderUserId.lastName})

            //moderator
            this.setState({getModeratorFirstName:getChats.data.getMessage.receiveUserId.firstName})
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render() {
        const getUserId = this.state.userId
        const getChatUserFirstName = this.state.getUserChatFirstname
        const getChatUserLastName = this.state.getUserChatLastname

        const getModeratorFirstName = this.state.getModeratorFirstName

        const postBody = this.state.postBody.map(function(getPostBody){
            return(<div>
                 <h5 className='chat__userMessage'>{getPostBody}</h5>
            </div>)
        })

        const postChat = this.state.postChat.map(function(showChats){
            return(<div id='postChat' className='chat__user'>
            <p className='chat__userP'>{getChatUserFirstName} {getChatUserLastName}</p>
                <h5 className='chat__userMessage'>{showChats}</h5>
            </div>)
        })

        const getAllChats1 = this.state.getAllChats1.map(function(chatitems){
            console.log(chatitems)
            return(<div>
                <h1>{chatitems}</h1>
            </div>)
        })

        const getAllChats2 = this.state.getAllChats2.map(function(chatitems2){
            return(<div className='showModeratorChats'>
                <p className='chat__moderatorP'>{getModeratorFirstName}</p>
                <h5 className='chat__moderatorMessage'>{chatitems2}</h5>
            </div>)
        })


        const showUserChats = this.state.getChats.map(function(items){
            return(<div className='showUserChats' id='showUserChats'>
            <p className='chat__userP'>{getChatUserFirstName} {getChatUserLastName}</p>
                <h5 className='chat__userMessage'>{items}</h5>
            </div>)
        })

        return (
            <div id='chat' className='chat'>
                <div className='chat__container'>
                <div id='showhelp' id='chat__showHelp' className='chat__showHelp'>
                <h5 onClick={this.onChatClick} className='chat__h5'><i class="fas fa-comments"></i> Chat support</h5>
                </div>

                <div id='chat__Chat' className='chat__Chat'>
                <div className='chat__display'>
                <i id='icon' onClick={this.onMinimizeClick} class="far fa-window-minimize chat__minimize"></i>
                <div className='chat__displayMessages'>
                <div className='chat__moderator'>
                {getAllChats2}
                </div>
                <div className='chat__user'>
                {showUserChats}
                
                {postChat}
                </div>
                </div>
                <form onSubmit={this.onChatSend}>
                <div className='chat__input'>
                <input type='hidden' value={getUserId}></input>
                    <input id='chatUserInput' onChange={this.onChatInputChange} name="messagesSender" className='chat__input' type='text'></input>
                     
                     <button type='submit'>Chat</button>
                </div>
                </form>
                </div>

                </div>

                </div>
 
            </div>
        )
    }
}
