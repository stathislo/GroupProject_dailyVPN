import axios from 'axios'
import React, { Component } from 'react'
import './ModeratorChat.css'

export default class Chat extends Component {
    constructor(props){
        super(props)
        this.state={
            allChats:[],
            getmessages:[]
        }

        axios.get("http://localhost:5000/main", { withCredentials:true})
        .then(res=>{
            console.log(res)
            if(res.data.loggedin ==='loggedin' && res.data.user==='moderator'){
                this.setState({moderatorName:res.data.userFirstName})
                this.setState({moderatorAvantar:res.data.avantar})
                this.setState({moderatorId:res.data.userId})

                axios.get("http://localhost:5000/getallchats", { withCredentials:true})
                .then(allChats=>{
                    console.log(allChats)
                    this.setState({allChats:allChats.data.x})
                })
                .catch(err=>{
                    console.log(err)
                })
            }else{
                this.props.history.push("/login")
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    onUserClick = (event)=>{
        event.preventDefault()

        let moderator__usersChats = document.querySelectorAll(".moderator__usersChats")

        for(let getchats of moderator__usersChats){
            
            getchats.addEventListener("click", ()=>{
                console.log(getchats.childNodes[0].value)
                axios.post("http://localhost:5000/getChatMsgsBetweenModeratorsAndUser", {userId:getchats.childNodes[0].value}, { withCredentials:true })
                .then(getmessages=>{
                    //console.log(getmessages.data.chat)
                    this.setState({getmessages:getmessages.data.chat})
                    
                })
                .catch(err=>{
                    console.log(err)
                })
            })
        }
    }
    render() {

        const getmessages = this.state.getmessages.map(chats=>{
            console.log(chats.roleSender)
            if(chats.roleSender==='user'){
                return(<div className='moderator__rightSideUserMessage'>            
                <h5 className='moderator__chatSideUser'>{chats.message}</h5>                
                </div>)
            }
                if(chats.roleSender==='moderator'){
                    return(<div className='moderator__rightSideChats'>
                            
                    <h5 className='moderator__chatSideH5'>{chats.message}</h5>
                                
                    </div>)
                }
        })

        const allChats = this.state.allChats.map(items=>{
            console.log(items)
            return(<div onClick={this.onUserClick} className='moderator__usersChats'>
            <input id='input' className='chatinput' name='userId' type='hidden' value={items._id}></input>
                        <div className='moderator__userImage'>
                            <img className='moderator__userImg' src={items.avantar}></img>
                         </div>
                      <div className='moderator__userNameAndText'>
                      <h5 className='moderator__userNameH5'>{items.firstName} {items.lastName}</h5>
                        <p className='moderator__userNameP'></p>
                                    </div>
                                    <div className='moderator__userDateOfSend'>
                                        <p className='moderator__userDateSend'>25-12-1991 16:00</p>
                                    </div>
            </div>)
        })

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

                                {allChats}
                              

                            </div>
                            <div className='moderator__chatRightSide'>
                                <div className='moderator__chatRightImage'>
                                    <img className='moderator__chatRightImg'></img>
                                </div>


                                    {getmessages}

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
