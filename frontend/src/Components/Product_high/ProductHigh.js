import React, { Component } from 'react'
import paypalLogo from "../Index/Images/paypal.png"
import axios from "axios"
import Nav from "../Index/Nav/Nav"

export default class ProductMedium extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        axios.get("http://localhost:5000/product/" + this.props.match.params.name, {withCredentials:true})
        .then(res=>{
            if(res.data.loggedin==="loggedin"){
                
                console.log(res.data)
                this.setState({productId:res.data.products._id})
                this.setState({name:res.data.products.name})
                this.setState({price:res.data.products.price})
                this.setState({start_date:res.data.products.start_date})
                this.setState({end_date:res.data.products.end_date})
                this.setState({email:res.data.user.email})
                this.setState({userId:res.data.user._id})
    
               
               const getStartDate = res.data.products.start_date
                console.log(getStartDate.slice(0,10))
            const getEndDate = res.data.products.end_date
                const start_date = document.getElementById("start_date").textContent ="Start Date: " + getStartDate.slice(0,10)
                const end_date = document.getElementById("end_date").textContent = "End Date: " + getEndDate.slice(0,10)
            }else{
                this.setState({productId:res.data.products._id})
                this.setState({name:res.data.products.name})
                this.setState({price:res.data.products.price})
                this.setState({start_date:res.data.products.start_date})
                this.setState({end_date:res.data.products.end_date})
                this.setState({email:res.data.user.email})
                this.setState({userId:res.data.user._id})
    
               
               const getStartDate = res.data.products.start_date
                console.log(getStartDate.slice(0,10))
            const getEndDate = res.data.products.end_date
                const start_date = document.getElementById("start_date").textContent ="Start Date: " + getStartDate.slice(0,10)
                const end_date = document.getElementById("end_date").textContent = "End Date: " + getEndDate.slice(0,10)
            }
          
            
        })
        .catch(err=>{
            console.log(err)
            //this.props.history.push("/error")
        })
    }

    onPayClick = (event)=>{
        event.preventDefault()

        const makePayment = {
            productId:this.state.productId,
            email:this.state.email,
            userId:this.state.userId
        }

        console.log(JSON.stringify(makePayment.productId))
        
        axios.post("http://localhost:5000/payment/productlow", makePayment)
        .then(payment=>{
            window.open(payment.data)
        })
        .catch(err=>{
            console.log(err)
        })

    }

    render() {
        const _id = this.state.productId
        const name = this.state.name
        const price = this.state.price

        const email = this.state.email
        const userId = this.state.userId
        return (
            <div className='productLow text-center'>
            <Nav/>
            <div className='product-container'>
            <div className='secure'>
                <div className='secure__texts'>
                    <h1 id="header-productLow">Secure your digital life effortlessly</h1>
                    <span>100% money-back guarantee for your first 30 days of service.</span>
                </div>
            </div>          
                
                <form className='plan__form' onSubmit={this.onPayClick}>
                    <div className="pricing-columns col-lg-6 col-md-6 text-center">
                    <input type='hidden' name='productId' value={_id}></input>
                    <input type='hidden' name='email' value={email}></input>
                    <input type='hidden' name='userId' value={userId}></input> 
                        <div className="card">
                            <div className="card-header">
                                <h3>2 Year Plan</h3>
                            </div>
                            <div className="card-body">
                                <h2>${price} <small className="text-muted">/ mo</small></h2>
                                <h5>Unlimited Devices</h5>
                                <h5>Unlimited Bandwith<small className="text-muted">/ 200Mbps</small></h5>
                                <h5><small className="text-muted">Save 66%</small></h5>
                                </div>    
                        </div> 
                    </div>        
                <hr></hr>
                <div>
                    <h1>Create your account</h1>
                </div>
                <div>
                    <span>Email address you will use to log in</span><br/>
                    <input type="email" placeholder="enter your email" name="email"></input>
                </div>
                <hr></hr>
                <div>
                    <h1>Payment</h1>
                </div>
                <div className='card'>
                <div className="card-header">
                    <span>Paypal </span>
                    <img src={paypalLogo}></img>
                </div>
                <div className="card-body">
                    <dd>Your subscription - 1 month Plan EUR {price}</dd>
                    <dd>VAT 24 Greece EUR</dd>
                    <dd>Total</dd>
                    <dd>
                    <button className="paypal-button" type="submit">
                        <span className="paypal-button-title">
                        Buy now with
                        </span>
                        <span className="paypal-logo">
                        <i className="Pay">Pay</i><i className="Pal">Pal</i>
                        </span>
                    </button>
                    </dd>
                    <dd>By clicking Complete purchase, you agree to our Terms and Conditions. Learn how we collect, use and share your data in our Privacy Policy. If you do not wish to receive information about Surfshark services, please send us an email at support@surfshark.com. You can cancel recurring payments at any time.
                    This order process is conducted by our online reseller cleverbridge AG. Payment processing and order fulfillment are done by cleverbridge AG, Gereonstr. 43-65, 50670 Cologne, Germany.
                    Terms & Conditions Contact Right of Revocation Security Legal Info Privacy Policy</dd>

                </div>
                    
                </div>
                </form>
        </div>

        <div>
               
               <footer className="bg-dark text-center text-white">
                <div className="container p-4  pb-0">
                
                <section className="mb-5">
                {/* facebook */}
                <a class="btn btn-link btn-floating btn-lg  text-light s-1 facebook" href="#!" type="button">
                <i class="fab fa-facebook-f"></i></a>
                {/* twitter */}
                <a class="btn btn-link btn-floating btn-lg text-light s-1 twitter" href="#!" role="button">
                <i class="fab fa-twitter"></i></a>
                {/* Instagram  */}
                <a class="btn btn-link btn-floating btn-lg text-light s-1 instagram" href="#!" role="button">
                <i class="fab fa-instagram"></i></a>
                {/* Google */}
                <a class="btn btn-link btn-floating btn-lg text-light s-1 google" href="#!" role="button">
                <i class="fab fa-google"></i></a>
                {/* Linkedin */}
                <a className="btn btn-link btn-floating btn-lg text-light s-1 linkedin" href="#!" role="button">
                <i class="fab fa-linkedin"></i></a>
                {/* Github */}
                <a class="btn btn-link btn-floating btn-lg text-light s-1 github" href="#!" role="button">
                <i class="fab fa-github"></i></a>
                </section>
                
                <div className="row">
                <div className="col-md-4">
                <h5>Contact Us</h5>
                <dl className="Contact-list"></dl>
                <dt>Email:</dt>
                <dd><a href="#">info@vpndaily.eu</a></dd>
                <dt>Tech Support:</dt>
                <dd><a href="#">support@vpndaily.eu</a></dd>
                </div>

                <div className="col-md-4">
                <dt>Live Chat</dt>
                <dd>
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                <i class='far fa-comments'></i></a>
                </dd>
                </div>
                
                <div className="col-md-4">
                <h5>Help</h5>
                <dl className="Help-list"></dl>
                <dd><a href="#">FAQ</a></dd>
                <dd><a href="#">Privacy Policy</a></dd>
                <dd><a href="#">Terms Of service</a></dd>    
                </div>
                </div>

                <div className="text-center p-3 copy">
                <a>2021 Copyright DailyVPN©.All rights reserved </a>
                </div>
                
                
                </div>
               
               </footer>
            </div>

            </div>

            
        )
    }
}
