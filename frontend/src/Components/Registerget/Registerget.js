import React, { Component } from 'react'
import axios from "axios"

export default class Reset extends Component {
    constructor(props){
        super(props)
        this.state = {
            id:"",
            password:"",
        }

    }

    componentDidMount(){
        axios.get("http://localhost:5000/register/" + this.props.match.params.id)
        .then(res=>{
            this.setState({ registerToken: res.data.RegisterToken })
        })
        .catch(err=>{
            console.log(err=403)
            err= 403
            let errorMessage = err
            console.log(errorMessage)
            if(errorMessage){
                this.props.history.push("/error")
            }
        })
    }

    onChangePassword1 = (event)=>{
        this.setState({password: event.target.value})
        console.log(event.target.value)
    }

    onSubmitForm = (event)=>{
        event.preventDefault()

        const user = {
            password:this.state.password,
            registerToken: this.state.registerToken
        }

        axios.post("http://localhost:5000/registerformcreate", user)
        .then(res=>{
            console.log(res.data)
            this.props.history.push("/success")
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render() {
        const RegisterToken = this.state.registerToken
        return (
            <div>
                <div id='registerNewForm' className='form__container'>
                <form onSubmit={this.onSubmitForm} className='registerNewForm'>
                    <div className='getRegisterPassword'>
                        <input onChange={this.onChangePassword1} className='getRegisterInput' name='password' placeholder='Write your password' type='password'></input>
                    </div>
                    <input onChange={this.onTokenChange} name="registerToken" type='hidden' value={RegisterToken}></input>
                    <div className='getRegisterSubmitButton'>
                        <button className='getRegisterSubmitBtn' type='submit'>Register</button>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}
