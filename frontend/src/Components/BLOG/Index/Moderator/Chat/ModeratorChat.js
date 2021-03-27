import React, { Component } from 'react'
import './ModeratorChat.css'

export default class Chat extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="sidebar">
                        <h3>Moderator Mode</h3>
                        <ul>
                            <li className='moderator__li'><a href="">- Posts</a></li>
                            <li className='moderator__li'><a href="">- Users</a></li>
                            <li className='moderator__li'><a href="">- VpnDaily</a></li>
                            <li className='moderator__li'><a href="">- Chat</a></li>
                        </ul>
                    </div>
                    <div className="main_content2">
                        <div className='moderator__chatContainer'>
                            <div className='moderator__chatLeftSide'>
                                <div className='moderator__chatSearch'>
                                    <input className='moderator__Chatinput' type='text' name='chatSearch' placeholder='Search a chat'></input> 
                                </div>
                                <div className='moderator__usersChats'>
                                    <div className='moderator__userImage'>
                                        <img src='https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' className='moderator__userImg'></img>
                                    </div>
                                    <div className='moderator__userNameAndText'>
                                        <h5 className='moderator__userNameH5'>Alex</h5>
                                        <p className='moderator__userNameP'>Hello i need some help with....</p>
                                    </div>
                                    <div className='moderator__userDateOfSend'>
                                        <p className='moderator__userDateSend'>25-12-1991 16:00</p>
                                    </div>
                                </div>
                            </div>
                            <div className='moderator__chatRightSide'>
                                <div className='moderator__chatRightImage'>
                                    <img className='moderator__chatRightImg'></img>
                                </div>
                                <div className='moderator__rightSideChats'>
                                    <h5 className='moderator__chatSideH5'>Hey, this is a chat!</h5>
                                </div>
                                <div className='moderator__rightSideUserMessage'>
                                    <h5 className='moderator__chatSideUser'>Hey i am the user</h5>
                                </div>
                                <div className='moderator__rightSideInputChat'>
                                    <input className='moderator__rightSideInput' placeholder='Type your message and hit enter' type='text'></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
