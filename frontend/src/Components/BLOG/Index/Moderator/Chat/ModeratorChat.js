import React, { Component } from 'react'
import './ModeratorChat.css'
import axios from "axios"
import openSocket from "socket.io-client"

export default class Chat extends Component {
    constructor(props){
        super(props)
            this.state = {
                chats:[],
                showModeratorChats:[],
                showUserChats:[],
                chatid:"",
                moderatorchat:"",
                getLiveModerator:[],
                postChat:[],
                allMessages:[]
             }

        axios.get("http://localhost:5000/main", { withCredentials: true })
        .then(res=>{
            console.log(res)
            if(res.data.loggedin==='loggedin' && res.data.user==='moderator'){
                let moderator__usersChats = document.querySelectorAll(".moderator__usersChats")
                console.log(moderator__usersChats)
                this.setState({userAvantar:res.data.avantar})
                this.setState({moderatorFirstname:res.data.firstName})
                this.setState({moderatorLastname:res.data.lastName})
                this.setState({moderatorUserid:res.data.userId})
                for(let allmoderator__usersChats of moderator__usersChats){
                    console.log(allmoderator__usersChats)
                    allmoderator__usersChats.addEventListener("click",()=>{
                        console.log("clicked")
                        console.log(allmoderator__usersChats.childNodes[0].value)
                        this.setState({chatid:allmoderator__usersChats.childNodes[0].value})
                        console.log(this.state.chatid)
                        axios.post("http://localhost:5000/getmoderatormessages",{chatid:this.state.chatid},{ withCredentials:true })
                        .then(showModeratorChats=>{
                            console.log(showModeratorChats.data.findMessage.senderUserId._id)
                            this.setState({getSenderUserId:showModeratorChats.data.findMessage.senderUserId._id})
                            this.setState({showModeratorChats:showModeratorChats.data.findMessage.messageReceive})
                            this.setState({showUserChats:showModeratorChats.data.findMessage.messagesSender})
                        })
                        .catch(err=>{
                            console.log(err)
                        })
                    })
                }
            }else{
                this.props.history.push("/login")
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    testFunction = async()=>{
        const socket =  openSocket("http://localhost:5000")
        await  socket.on("chatMessage", data=>{
             console.log(data.findUserMessage.messagesSender)
             if(data.action==='putNewChat'){
                 
                 console.log(data)
                 this.setState({postChat:data.findUserMessage.messagesSender})
                 this.setState({postBody:data.body})
                 //console.log(this.postChat)
             }
         })
    }

    componentDidMount(){
        //const socket = openSocket("http://localhost:5000")
        axios.get("http://localhost:5000/getmoderatorchat", { withCredentials:true })
        .then(chats=>{
            //console.log(chats.data.chats)
            this.setState({chats:chats.data.chats})
        })
        .catch(err=>{
            console.log(err)
        })

        this.testFunction()
        // socket.on("getAllChatModerator", data=>{
        //     //console.log(data)

        //     if(data.action==="showAllChats"){
        //         console.log(data.allChats)
        //         this.setState({chats:data.allChats})
                
        //     }
        // })
        this.setState({allMessages:[...this.state.chats, ...this.state.postChat]})
        console.log("ALL MESSAGES");
        console.log(this.allMessages);

        // allMessages.sort((a,b)=>{
        //     const dateA = new Date(a.sendDate);
        //     const dateB = new Date(b.sendDate);
        //     return Math.abs(dateA) - Math.abs(dateB)
        // })

    }


    render() {

        const getModeratorAvantar = this.state.userAvantar

        const moderatorFirstname = this.state.moderatorFirstname

        const getChats = this.state.chats.map(function(items){
            console.log(items)

            return(<div>
          <div className='moderator__usersChats'>
          <input name='chatid' type='hidden' value={items.senderUserId._id}></input>
              <div className='moderator__userImage'>
              <img className='moderator__userImg' src={items.senderUserId.avantar}></img>
              </div>
                  <div className='moderator__userNameAndText'>
                    <h5 className='moderator__userNameH5'>{items.senderUserId.firstName} {items.senderUserId.lastName}</h5>
                     <p className='moderator__userNameP'>{items.messagesSender}</p>
                     </div>
                          <div className='moderator__userDateOfSend'>
                       <p className='moderator__userDateSend'>25-12-1991 16:00</p>
                    </div>
                 </div>
            </div>)
        })


        const showModeratorChats = this.state.showModeratorChats.map(getModeratorChats=>{
            console.log(getModeratorChats)
            return(<div className='moderator__rightSideChats'>
                    <h5 className='moderator__chatSideH5'>{getModeratorChats}</h5>
            </div>)
        })


        const postChat = this.state.postChat.map(postChats=>{
            let moderator__rightSideUserMessage = document.querySelectorAll(".moderator__rightSideUserMessage")
            for(let deletemoderator__rightSideUserMessage of moderator__rightSideUserMessage){
                deletemoderator__rightSideUserMessage.childNodes[0].style.display='none'
                    let moderator__rightSideUserMessage__next = document.getElementsByClassName(".moderator__rightSideUserMessage__next")
                    for(let showmoderator__rightSideUserMessage__next of moderator__rightSideUserMessage__next){
                        showmoderator__rightSideUserMessage__next.style.display='flex'
                    }
            }
            return(<div className='moderator__rightSideUserMessage__next'>
                <h5 className='moderator__chatSideUser'>{postChats}</h5>
            </div>)
        })

        const showUserChats = this.state.showUserChats.map(getUserChats=>{
            return(<div className='moderator__rightSideUserMessage'>
                    <h5 className='moderator__chatSideUser'>{getUserChats}</h5>
                    <form onSubmit={async(event)=>{
                        event.preventDefault()

                        const moderatorChat = {
                            moderatorchat:this.state.moderatorchat,
                            senderUserId:this.state.getSenderUserId
                        }

                        let moderator__rightSideUserMessage = document.querySelectorAll(".moderator__rightSideUserMessage")
                        for(let deletemoderator__rightSideUserMessage of moderator__rightSideUserMessage){
                            deletemoderator__rightSideUserMessage.childNodes[0].style.display='none'
                                let moderator__rightSideUserMessage__next = document.getElementsByClassName(".moderator__rightSideUserMessage__next")
                                for(let showmoderator__rightSideUserMessage__next of moderator__rightSideUserMessage__next){
                                    showmoderator__rightSideUserMessage__next.style.display='flex'
                                }
                        }
                        
                        axios.post("http://localhost:5000/postmoderatorchat" ,moderatorChat,  { withCredentials:true })
                        

                        .then(sendMessage=>{
                            console.log(sendMessage)
                        
                        })
                        .catch(err=>{
                            console.log(err)
                        })
                        const socket =  openSocket("http://localhost:5000")
                        await socket.on("postModeratorMessage", data=>{
                            console.log(data.moderatorChat.messageReceive)
                            if(data.action==='getModeratorMessage'){
                                this.setState({getLiveModerator:data.moderatorChat.messageReceive})
                            }
                        })
                        
                    }}>
                <div className='moderator__rightSideInputChat'>
                <input type='hidden' name='senderUserId'></input>
                     <input onChange={(event)=>{
                         this.setState({moderatorchat:event.target.value})
                         console.log(event.target.value)
                     }} name='moderatorchat' className='moderator__rightSideInput' placeholder='Type your message and hit enter' type='text'></input>
                 </div>
                </form>
            </div>)
        })

        const getLiveModerator = this.state.getLiveModerator.map(liveModerator=>{
            return(<div className='moderator__rightSideChats'>
                <h5 className='moderator__chatSideH5'>{liveModerator}</h5>
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

                                {getChats}
                                {/* <div className='moderator__usersChats'>
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
                                </div> */}
                            </div>
                            <div className='moderator__chatRightSide'>
                                <div className='moderator__chatRightImage'>
                                    <img src={getModeratorAvantar} className='moderator__chatRightImg'></img>
                                </div>
                                {showModeratorChats}
                                {postChat}
                                
                                    {getLiveModerator}
                                
                                    {showUserChats}


                            </div>

                        </div>
                        
                    </div>
 
                </div>



            </div>
            
        )
    }
}
