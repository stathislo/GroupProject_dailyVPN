import React, { Component } from 'react'
import "./Privacy_policy.css"
import logo from "../General_terms/security.png"


export default class Privacy_policy extends Component {
    render() {
        return (
            <div className="privacy__container">
            <div className='privacy__LeftSide'>
                <img className='logo-privay' src={logo} width="50" />
                <a className="navbar-brand" href="/" style={{ color: '#FFF' }}>DailyVPN</a>
            </div>

            <div className="privacy__rightside">
                <div className="privacy__content">
                    <h2 className="privacy__title">Privacy Policy</h2>
                    <div><b>1.Processing of your data</b></div>
                    <div>Processing of your data DailyVPN processes user data to a limited scope – for provision of the Services, processing payments for the Services, as well as the functioning of our websites and mobile applications. We process the following basic information:</div>
                    <br/>
                    <div><b>2.Information for creating your account</b></div>
                    <div>We ask for your email address as part of your registration. It is necessary for establishing a Nord account, retrieving a lost password, and using our Services.</div>
                    <br/>
                    <div><b>3.Payment related information</b></div>
                    <div><b>Payment data</b> (if using paid Services). This information is necessary to collect payments for our Services. In addition to the traditional payment methods, such as credit cards, users can buy our Service with cryptocurrency. Our payment processing partners process basic billing information for payment processing and refund requests (such as date of purchase, payer’s IP address, zip code, card owner's full name and credit card information). We also process some of the same payment information ourselves (e. g., card owner's full name, last few digits of your credit card) in cases of recurring payments.</div>
                    <div><b>Country details.</b>When providing your payment details, we ask our users to provide the country where they are registered, have a permanent address or usually live. This information is necessary for VAT calculation purposes.</div>
                    <br/>
                    <div><b>4.Sharing your personal data</b></div>
                    <div>We do not share your personal information with third parties except as described in this Privacy Policy.</div>
                    <div><b>Service providers.</b>We use third-party service providers to help us with various operations, such as payment processing, email automation, website and app diagnostics, analytics and other. As a result, some of these providers may process personal information.</div>
                    <br/>
                    <div><b>5.Data security</b></div>
                    <div>We take data security very seriously and take all steps reasonably necessary to secure your data (whether technical, physical, or administrative). However, no company can guarantee the absolute security of internet communications. By using the Services, you expressly acknowledge that we cannot guarantee the security of any data provided to or received by us through the Services and that any information received from you through the website or our Services is provided at your own responsibility.</div>
                </div>
                </div>
            </div>
        )        
    }
}        