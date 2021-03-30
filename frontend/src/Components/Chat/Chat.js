import axios from 'axios'
import React, { Component } from 'react'
import "./Chat.css"
import openSockets from "socket.io-client"



export default class Chat extends Component {
    constructor(props){
        super(props)

        this.state = {
            message:"",
            chats:[]
        }

        axios.get("http://localhost:5000/main" , { withCredentials:true })
        .then(res=>{
            if(res.data.loggedin==='loggedin' && res.data.user==="user"){
                console.log(res.data.userFirstName)
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
        console.log("click")
        console.log(chat__showHelp.className)
    }

    onInputChange = (event)=>{
        this.setState({message:event.target.value})
    }

    onChatSubmit=(event)=>{
        event.preventDefault()

        const socket = openSockets("http://localhost:5000")
        const Message = {
            message:this.state.message
        }

       let chatinput = document.getElementById("chatinput")

        axios.post("http://localhost:5000/postuserchat", Message, { withCredentials:true })
        .then(chat=>{
            console.log(chat)
            chatinput.value=''
            const socket = openSockets("http://localhost:5000")
            axios.get("http://localhost:5000/showuserchats", { withCredentials:true })
            .then(res=>{
                this.setState({chats:res.data.showUserChat})
                socket.on("userchat", data=>{
                    console.log(data.message)
                    if(data.action==="userchats"){
                        this.setState({userLiveChat:data.message.message})
                    }
                })
            })
            .catch(err=>{
                console.log(err)
            })
    


        })
        .catch(err=>{
            console.log(err)
        })

        socket.on("postuserchats", data=>{
            console.log(data)
            this.setState({postUserChat:data.message.message})
        })
        

    }

    componentDidMount(){
        const socket = openSockets("http://localhost:5000")
        axios.get("http://localhost:5000/showuserchats", { withCredentials:true })
        .then(res=>{
            this.setState({chats:res.data.showUserChat})
        })
        .catch(err=>{
            console.log(err)
        })

        socket.on("userchat", data=>{
            console.log(data.message)
            if(data.action==="userchats"){
                this.setState({userLiveChat:data.message.message})
            }
        })

 
    }

    componentDidUpdate(){
        const socket = openSockets("http://localhost:5000")
        socket.on("postmoderatorchats", data=>{
            console.log(data.message)
            if(data.action==="postmoderatorchat"){
                this.setState({moderatorLiveChat:data.message.message})
            }
        })
    }

    
    render() {

        const chats = this.state.chats.map(items=>{
            if(items.roleSender==="user"){
                return(<div id='chat__user' className='chat__user'>
                <p className='chat__userP'>{items.senderUserId.firstName}</p>
                <h5 className='chat__userMessage'>{items.message}</h5>
                </div>)
            }
                if(items.roleSender==='moderator'){
                    return(<div className='chat__moderator'>
                    <p className='chat__moderatorP'>Support team</p>
                    <h5 className='chat__moderatorMessage'>{items.message}</h5>
                    </div>)
                }

        })

        const userLiveMessage = this.state.userLiveChat

        const postUserChat = this.state.postUserChat

        const moderatorLiveChat = this.state.moderatorLiveChat


        // const moderatorChats = this.state.chats.map(moderatorItems=>{
        //     if(moderatorItems.roleSender==='moderator'){
        //         return(<div className='chat__moderator'>
        //         <p className='chat__moderatorP'>Moderator</p>
        //         <h5 className='chat__moderatorMessage'>{moderatorItems.message}</h5>
        //         </div>)
        //     }
        // })

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
                    {/* moderaotr */}

        
                    {/* {moderatorChats} */}
                    
                    
                   
                    {chats}
                    {/* {moderatorLiveChat} */}
                    <div className='chat__user'>
                <p className='chat__userP'></p>
                <h5 className='chat__userMessage'>{userLiveMessage}</h5>
                </div>
                   

                </div>
                <form onSubmit={this.onChatSubmit}>
                <div className='chat__input'>
                    <input id='chatinput' onChange={this.onInputChange} name='message' className='chat__input' type='text'></input>
                     <button>Chat</button>
                </div>
                </form>


                </div>

                </div>

                </div>
 
            </div>
        )
    }
}
