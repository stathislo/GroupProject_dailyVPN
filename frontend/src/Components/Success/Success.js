import React, { Component } from 'react'
import "./Success.css"


export default class Success extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    // onSuccess = ()=>{
    //     setTimeout(function(){
    //        window.location.href = "http://localhost:3000"
    //     },8000)
    // }
    render() {
        // this.onSuccess()
        return (
            <div>
                <div className='success__card'>
                    <div className='success__texts'>
                        <h3 className='success__h5'>Thank you for your registration</h3>
                        <h5 className='success__p'>Please check your email for complete your registration! Thank you</h5>
                        <div class="spinner-border text-primary" role="status">
                            <span class="sr-only"></span>
                        </div>
                        <h5>Loading..</h5>
                    </div>
                </div>
            </div>
        )
    }
}
