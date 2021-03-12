import React, { Component } from 'react';
import axios from "axios";
import "./Registerget.css"


export default class Reset extends Component {
    constructor(props){
        super(props)
        this.state = {
            id:"",
            firstname:"",
            lastname:"",
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

        var hasEightCharsListItem,
        hasUpperCaseListItem,
        hasLowerCaseListItem,
        hasSpecialListItem,
        hasDigitListItem;

        var minPasswordLength = 8;
 
        var _hasLowerCase = /[a-z]/;
        var _hasUpperCase = /[A-Z]/;
        var _hasDigit = /\d/;
        // match special characters except space
        var _hasSpecial = /(_|[^\w\d ])/;


        var hasEight = event.target.value.length>=minPasswordLength;
        var hasLower = _hasLowerCase.test(event.target.value);
        var hasUpper = _hasUpperCase.test(event.target.value)
        var hasDigit = _hasDigit.test(event.target.value)
        var hasSpecial = _hasSpecial.test(event.target.value)

        hasEightCharsListItem = document.getElementById("req-length")
        hasUpperCaseListItem = document.getElementById('req-upper')
        hasLowerCaseListItem = document.getElementById('req-lower')
        hasSpecialListItem = document.getElementById("req-special")
        hasDigitListItem = document.getElementById("req-digit")


        var checkAndSwitchClasses = function(has){
            let error = document.getElementById("error")
            if(has){
                console.log(true)
                error.className='fas fa-check-circle'
                return true
            }else{
                console.log(false)
                error.className='fas fa-exclamation-circle'
                return false
               
            }
        }

        var checkAndSwitchClasses2 = function(has){
            let error2 = document.getElementById("error2")
            if(has){
                console.log(true)
                error2.className='fas fa-check-circle'
                return true
            }else{
                console.log(false)
                error2.className='fas fa-exclamation-circle'
                return false
               
            }
        }

        var checkAndSwitchClasses3 = function(has){
            let error3 = document.getElementById("error3")
            if(has){
                console.log(true)
                error3.className='fas fa-check-circle'
                return true
            }else{
                console.log(false)
                error3.className='fas fa-exclamation-circle'
                return false
               
            }
        }

        var checkAndSwitchClasses4 = function(has){
            let error4 = document.getElementById("error4")
            if(has){
                console.log(true)
                error4.className='fas fa-check-circle'
                return true
            }else{
                console.log(false)
                error4.className='fas fa-exclamation-circle'
                return false
               
            }
        }

        var checkAndSwitchClasses5 = function(has){
            let error5 = document.getElementById("error5")
            if(has){
                console.log(true)
                error5.className='fas fa-check-circle'
                return true
            }else{
                console.log(false)
                error5.className='fas fa-exclamation-circle'
                return false
               
            }
        }

        checkAndSwitchClasses(hasEight, hasEightCharsListItem);
        checkAndSwitchClasses2(hasLower, hasLowerCaseListItem);
        checkAndSwitchClasses3(hasUpper, hasUpperCaseListItem);
        checkAndSwitchClasses5(hasDigit, hasDigitListItem);
        checkAndSwitchClasses4(hasSpecial, hasSpecialListItem);
    }

    onChageFirstname = (event)=>{
        this.setState({firstName:event.target.value})
    }

    OnChageLastname = (event)=>{
        this.setState({lastName:event.target.value})
    }

    onSubmitForm = (event)=>{
        event.preventDefault()

        const user = {
            firstName:this.state.firstName,
            lastName:this.state.lastName,
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
                <div className='getRegisterFirstname'>
                    <input onChange={this.onChageFirstname} type='text' name='firstName' placeholder='Write your firstname'></input>
                </div>
                <div className='getRegisterLastname'>
                    <input onChange={this.OnChageLastname} type='text' name='lastName' placeholder='Write your lastname'></input>
                </div>
                    <div className='getRegisterPassword'>
                        <input onChange={this.onChangePassword1} className='getRegisterInput' name='password' placeholder='Write your password' type='password'></input>
                    </div>
                    <input onChange={this.onTokenChange} name="registerToken" type='hidden' value={RegisterToken}></input>
                    <h5 id='req-length'>Has 8 Chars <i id='error'></i></h5>
                    <h5 id='req-upper'>Has one Lowercase <i id='error2'></i></h5>
                    <h5 id='req-lower'>Has one Upercase <i id='error3'></i></h5>
                    <h5 id='req-special'>Has one special Char <i id='error4'></i></h5>
                    <h5 id='req-digit'>Has one digit <i id='error5'></i></h5>
                    <div className='getRegisterSubmitButton'>
                        <button id='button' className='getRegisterSubmitBtn' type='submit'>Register</button>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}
