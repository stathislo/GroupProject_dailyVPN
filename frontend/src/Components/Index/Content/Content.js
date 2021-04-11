import React, { Component } from 'react'
import './Content.css'





export default class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    onButtonScroll = () => {
        let elmnt = document.getElementById("pricing");
        elmnt.scrollIntoView(); 
        }
    
    render() {
        return (
            <section id="content">
            <div className='Content'>
                <section className="content1">
                    <div className='row justify-content-center'>
                        <div className="left-content1 col-6">

                        </div>
                        <div className="right-content1 col-6">
                            <h4 className='right-content1-h4'>Going online is safer than ever before</h4>
                            <h1 className='right-content1-h1'><span className='right-content1-span'>Secure</span> & Anonymous Access</h1>
                            <h4 className='right-content1-text'>vpnDaily provides total anonimity and security for your online data wherever you are.
                               Stay hidden and protected while accessing the web from everywhere.</h4>
                            <button onClick={this.onButtonScroll} type="button" className="btn btn-danger btn-lg " id="btn-content1">Get Started</button>
                        </div>
                    </div>
                </section>
                <div className="first-br"></div>

                {/* Content 2  */}

                <section className="content2">
                    <div className='row justify-content-center row2'>
                        <div className="left-content2 col-6">
                            <h4 className='right-content2-h4'>Total protection fast and easy</h4>
                            <h1 className='right-content2-h1'><span className='right-content2-span'>Advanced</span> Device Protection</h1>
                            <h4 className='right-content2-text'>Secure all your devices with one subscription. Stay safe on Desktop, Laptop, Mobile phone or Tablet
                            with DailyVPN all the time. You can also set DailyVpn to your TV and your Router.</h4>
                            <button onClick={this.onButtonScroll} type="button" className="btn btn-danger btn-lg " id="btn-content2">Guard Me</button>
                        </div>
                        <div className="right-content2 col-6 ">

                        </div>
                    </div>
                </section>
                <div className="first-br"></div>

                {/* Content 3  */}
                
                <section className='content3'>
                    <div className="row justify-content-center row3">
                        <div className="left-content3 col-6">

                        </div>
                        <div className="right-content3 col-6">
                            <h4 className='right-content3-h4'>Unmatched Support System</h4>
                            <h1 className='right-content3-h1'><span className='right-content3-span'>Specialized</span> Technical Support</h1>
                            <h4 className='right-content3-text'>We've got you covered.<br></br>Contact us through our Live Chat or Email to have instant troubleshoot from our experts.
                             <br></br>DailyVPN makes sure that you get top level support 24/7.</h4>
                            <button onClick={this.onButtonScroll} type="button" className="btn btn-danger btn-lg " id="btn-content3">Stay Secure</button>
                        </div>
                    </div>
                </section>
            </div>
            </section>

        )
    }
}


