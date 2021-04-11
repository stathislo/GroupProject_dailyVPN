import React, { Component } from 'react'
import "./General_terms.css"
import logo from "./security.png"

export default class General_terms extends Component {
    render() {
        return (
            <div className="terms__container">
            <div className='terms__LeftSide'>
                <img className='logo-terms' src={logo} width="50" />
                <a className="navbar-brand" href="/" style={{ color: '#FFF' }}>vpnDaily</a>
            </div>

            <div className="terms__rightside">
                <div className="terms__content">
                    <h2 className="terms__title">General Terms of Service</h2>
                    <h2><b>1. Your Agreement with DailyVPN</b></h2>
                    <div><b>Additional Terms.</b> Our Services are subject to one or more of the additional terms below (“Additional Terms”). If there is any conflict between the terms in the General Terms and the Additional Terms, then the Additional Terms govern in relation to that Service.</div>
                    <div><b>Updates to Terms.</b> Nord may modify the Terms from time to time. The most recent version is the version that applies to your use of the Services. If the changes include material changes that affect your rights or obligations, we will notify you in advance of the changes by reasonable means, which could include notification through the client applications, website or via email. Unless it is stated by us otherwise, each update of the Terms comes into force as of the moment when amended Terms are published on this web page. You understand and agree that any continued use and access to the Services after any updates to these Terms are published, means that you voluntarily agree to be bound by the updated Terms.</div>
                    <div><b>Privacy.</b>For information about how we process information about you and your use of our Services, please see our Privacy Policy</div>
                    <br/>
                    <div><b>2. Our Services</b></div>
                    <div>To use any of our Services, you must set up an account. You are solely responsible for all usage or activity on your account including, but not limited to, use of the account by any person who uses your account, with or without authorization, or who has access to any computer on which your account resides or is accessible.</div>
                    <br/>
                    <div><b>3. License conditions</b></div>
                    <div><b>Subject to the terms</b> and conditions of these Terms, we grant you a limited, revocable, non-exclusive, personal, non-transferable, non-sublicensable, fixed-term license to: (1) download and use a copy of our software; and (2) use the Services, including, without limitation, the products and services made available on or through the our software or our website. No other right or license, express or implied, of any kind is granted to you hereunder with respect to the Services. The license provided herein is effective until terminated. This license automatically terminates if you fail to comply with these Terms.</div>
                    <div><b>The Services,</b> including, but not limited to, our software, mobile application and all other products, are owned and copyrighted by Nord and protected worldwide. We retain all right, title and interest in and to the Services and any portion thereof, including, without limitation, all copyrights, trademarks, service marks, patents, trade secrets and other intellectual property rights. You shall not take any action to jeopardize, limit or interfere in any manner with our ownership of and rights with respect to the Services. All rights are reserved unless otherwise noted.</div>
                    <br/>
                    <div><b>4. Payments</b></div>
                    <div>All our paid Services are subscribed on a service period basis. You choose the service period and the payment method yourself when you sign up for the paid Services. Your service will automatically be renewed, and your chosen payment method will be charged at the end of each service period, unless you decide to cancel your automatic payments for the Services before the end of the then-current subscription. All prices, including recurring subscription fees, are subject to change. Any changes in pricing will be communicated to you in advance. If you update payment details in your account, the updated information will be regarded as your preferred method for any future payments.</div>

                </div>
            </div>
            </div>




        )        
    }
}
