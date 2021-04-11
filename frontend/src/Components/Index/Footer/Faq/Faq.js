import React, { Component } from 'react'
import "./Faq.css"
import Nav from "../../Nav/Nav"
import Footer from "../../Footer/Footer"

export default class General_terms extends Component {
    render() {
        return (
            <div>
            <div className="faq__nav">
                <Nav/>
            </div>    

            {/* 1 faq  */}
            <div className='Faq__container'>
            <div className='Faq__title'>Frequently Asked Questions</div>
            <div className='accordion accordion-flush card-paypal col-lg-7 col-md-7 text-center'>
                <div className="accordion-item card-header">
                    <div className="row justify-content-between accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <div className="col-9 question">What is a VPN in simple terms?</div>
                        </button>
                    </div> 
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body card-paypal-body">
                    <div className="row justify-content-between"> 
                        <div className="col-6">A virtual private network, better known as a VPN, protects your identity and browsing activity from hackers, businesses, government agencies, and other snoops. When connecting to the internet, your data and IP address are hidden by a type of virtual tunnel. This keeps others from spying on your online activity.</div>
                    </div>
                </div>
                </div>
                     
                </div>
                </div>
            
            {/* 2 faq  */}
            <div className='accordiontwo accordion-flush card-paypal col-lg-7 col-md-7 text-center'>
                <div className="accordion-item card-header">
                    <div className="row justify-content-between accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        <div className="col-9 question">Is using a VPN safe?</div>
                        </button>
                    </div> 
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordiontwo">
                <div className="accordion-body card-paypal-body">
                    <div className="row justify-content-between"> 
                        <div className="col-6">A quality VPN is a safer way to search the internet. Without a VPN, your browsing and downloading activity could be visible to hackers, snoops, and cybercriminals. A hacker could intercept your email messages, mine personal data such as your Social Security number, or uncover the password to your online banking portal or credit card. Any of this could expose you to identity theft or fraud. That's why logging onto a VPN, which protects your privacy, is one of the safest ways to browse the web.</div>
                    </div>
                </div>
                </div>
                     
                </div>
                </div>

                {/* 3 faq */}
                <div className='accordion accordion-flush card-paypal col-lg-7 col-md-7 text-center'>
                <div className="accordion-item card-header">
                    <div className="row justify-content-between accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne">
                        <div className="col-9 question">Can you be tracked if you use a VPN?</div>
                        </button>
                    </div> 
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body card-paypal-body">
                    <div className="row justify-content-between"> 
                        <div className="col-6">No, your web traffic and IP address can't be tracked anymore. The VPN encrypts your data and hides your IP address by routing your connection requests through a VPN server. If anyone tries to track them, they'll just see the VPN server's IP address and complete gibberish.</div>
                    </div>
                </div>
                </div>
                     
                </div>
                </div>

                {/* 4 faq */}
                <div className='accordion accordion-flush card-paypal col-lg-7 col-md-7 text-center'>
                <div className="accordion-item card-header">
                    <div className="row justify-content-between accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseOne">
                        <div className="col-9 question">Is it OK to leave VPN on all the time?</div>
                        </button>
                    </div> 
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body card-paypal-body">
                    <div className="row justify-content-between"> 
                        <div className="col-6"> In most circumstances, you should leave your VPN switched on to remain protected from snoopers and hackers—particularly if your online activity involves sharing sensitive information, or transferring money, while connected to a public Wi-Fi hotspot.</div>
                    </div>
                </div>
                </div>
                     
                </div>
                </div>

                {/* 5 faq */}
                <div className='accordion accordion-flush card-paypal col-lg-7 col-md-7 text-center'>
                <div className="accordion-item card-header">
                    <div className="row justify-content-between accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseOne">
                        <div className="col-9 question">Is VPN illegal?</div>
                        </button>
                    </div> 
            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body card-paypal-body">
                    <div className="row justify-content-between"> 
                        <div className="col-6"> VPN is typically banned in countries that have authoritative laws, such as China, North Korea and Iran. With limited access to a majority of online content, in order to unblock blocked websites, citizens, tourists and expats in those countries typically resort to the use of proxy servers and VPN to unblock websites.</div>
                    </div>
                </div>
                </div>
                     
                </div>
                </div>
                </div>

            <div>
                <Footer/>
            </div>
            
            </div>
            


                


           
    
        )        
    }
}
            
    
            