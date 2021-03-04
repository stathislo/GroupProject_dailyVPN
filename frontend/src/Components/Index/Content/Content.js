import React, { Component } from 'react'
import './Content.css'



export default class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        return (
            <div className='Content'>
                <section className='row'>
                    <div className="content1 col-lg-12 col-md-6 col-sm-6 col-xs-12">
                        <div className="left-content1">

                        </div>
                        <div className="right-content1">
                            <h4 className='right-content1-h4'>Going online is safer than ever before</h4>
                            <h1 className='right-content1-h1'><span className='right-content1-span'>Secure</span> & Anonymous Access</h1>
                            <h4 className='right-content1-text'>DailyVPN provides total anonimity and security for your online data wherever you are.
                               Stay hidden and protected while accessing the web from everywhere.</h4>
                            <button onClick={this.onButtonClick} type="button" className="btn btn-danger btn-lg " id="btn-content1">Get Started</button>
                        </div>
                    </div>
                </section>
                <div className="first-br"></div>
                {/* Content 2  */}

                <section className='row row2'>
                    <div className="content2 col-lg-12 col-md-6 col-sm-6 col-xs-12">
                        <div className="left-content2">
                            <h4 className='right-content2-h4'>Total protection fast and easy</h4>
                            <h1 className='right-content2-h1'><span className='right-content2-span'>Advanced</span> Device Protection</h1>
                            <h4 className='right-content2-text'>Secure all your devices with one subscription.Stay safe on Desktop, Laptop, Mobile phone or Tablet
                            with DailyVPN all the time.<br></br> You can also set DailyVpn to your TV and your Router.</h4>
                            <button onClick={this.onButtonClick} type="button" className="btn btn-danger btn-lg " id="btn-content2">Guard Me</button>
                        </div>
                        <div className="right-content2">

                        </div>
                    </div>
                </section>
                <div className="first-br"></div>

                <section className='row row3'>
                    <div className="content3 col-lg-12 col-md-6 col-sm-6 col-xs-12">
                        <div className="left-content3">

                        </div>
                        <div className="right-content3">
                            <h4 className='right-content3-h4'>Unmatched Support System</h4>
                            <h1 className='right-content3-h1'><span className='right-content3-span'>Specialized</span> Technical Support</h1>
                            <h4 className='right-content3-text'>We've got you covered.<br></br>Contact us through our Live Chat or Email to have instant troubleshoot from our experts.
                             <br></br>DailyVPN makes sure that you get top level support 24/7.</h4>
                            <button onClick={this.onButtonClick} type="button" className="btn btn-danger btn-lg " id="btn-content3">Stay Secured</button>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}
