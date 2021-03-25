import axios from 'axios'
import React, { Component } from 'react'
import "./Chat.css"

export default class Chat extends Component {
    constructor(props){
        super(props)

        this.state = {

        }

        axios.get("http://localhost:5000/main" , { withCredentials:true })
        .then(res=>{
            if(res.data.loggedin==='loggedin' && res.data.user==="user"){
                
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
    render() {
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
                <p className='chat__moderatorP'>Moderator</p>
                <h5 className='chat__moderatorMessage'>Welcome how can i help you?</h5>
                </div>
                <div className='chat__user'>
                <p className='chat__userP'>user</p>
                <h5 className='chat__userMessage'>Hello</h5>
                </div>
                </div>
                <div className='chat__input'>
                    <input className='chat__input' type='text'></input>
                     <button>Chat</button>
                </div>
                </div>

                </div>

                </div>
 
            </div>
        )
    }
}
