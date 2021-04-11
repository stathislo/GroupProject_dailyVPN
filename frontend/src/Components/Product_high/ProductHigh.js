import React, { Component } from 'react'
import paypalLogo from "../Index/Images/paypal.png"
import axios from "axios"
import Nav from "../Index/Nav/Nav"
import Footer from "../Index/Footer/Footer"

export default class ProductHigh extends Component {
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

    vatCalc = (cost)=> {
        var vat = 24;
        var res = (cost/100)*(vat+100)
        return res.toFixed(2)
    }

    onEmailChange = (event)=>{
        this.setState({useremail:event.target.value})
        console.log(event.target.value)
    }

    onPayClick = (event)=>{
        event.preventDefault()
        let email=document.getElementById("email-input")

        if (email.value === ""){
            alert("Please enter a valid e-mail")
        }else {
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
    
            const user = {
                email:this.state.useremail,
                token:this.state.token
            }
    
            axios.post("http://localhost:5000/registerform", user)
            .then(res=>{
                console.log("User created!!")
                const message = document.getElementById("message").textContent="Check your email for confirmation"
            })
            .catch(err=>{
                console.log(err)
            })  
        }
    }

    render() {
        const _id = this.state.productId
        const name = this.state.name
        const price = this.state.price

        const email = this.state.email
        const userId = this.state.userId
        return (
            <div className='product-content text-center'>
            <Nav/>
            <div className='product-container'>
            <div className='secure'>
                <div className='secure__texts'>
                    <h1 id="header-productLow"><strong>Secure your digital life effortlessly</strong></h1>
                    <span><strong>100% money-back guarantee</strong> for your first 30 days of service.</span>
                </div>
            </div>          
                
                {/* pricing card */}
                <form className='plan__form' onSubmit={this.onPayClick}>
                    <div className="pricing-columns col-lg-6 col-md-6 text-center">
                    <input type='hidden' name='productId' value={_id}></input>
                    <input type='hidden' name='email' value={email}></input>
                    <input type='hidden' name='userId' value={userId}></input> 
                    <div className="card">
                            <div className="pricing-card-header">
                                <h3>2 Year Plan</h3>
                            </div>
                            <div className="card-body">
                                <h2>&#8364;{price} <small>/ mo</small></h2>
                                <h5>Unlimited Devices</h5>
                                <h5>Unlimited Bandwith<small>/ 200Mbps</small></h5>
                                <h5><small className="text-muted">Save 66%</small></h5>
                            </div>
                        </div>
                    </div>        
                <hr></hr>
                
                {/* create account */}
                <div className="container-account">
                    <div>
                        <h1 className="account-header"><strong>Create your account</strong></h1>
                    </div>
                    <div className="row justify-content-between">
                        <div className="email col-6">Email address you will use to log in</div>
                        <div className="col-6 email-content">
                            <i class="fas fa-undo col-3"> 30-day money-back guarantee</i>
                            <i class="fas fa-infinity col-3"> One account for all your devices</i>
                    </div>
                    <div className="w-100"></div>
                        <div className="row justify-content-around">
                            <input onChange={this.onEmailChange} id="email-input" className="input-email col-6" type="email" placeholder="enter your email" name="email"></input>
                    <div className="col-5 email-content">
                            <i class="fas fa-headset col-3 "> 24/7 friendly customer team</i>
                            <i class="fas fa-award col-3"> Award winning product for you all </i>
                        </div>
                    </div>
                </div>
                </div>
                <hr></hr>

                {/* payment */}
                <div className="container">
                <div>
                    <h1 className="payment-header"><strong>Payment</strong></h1>
                </div>


                <div className='accordion accordion-flush card-paypal col-lg-7 col-md-7 text-center'>
                <div className="accordion-item card-header">
                    <div className="row justify-content-between accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <div className="col-9 top">Paypal</div>
                        <div className="col-2 paypal-img-top"><img src={paypalLogo}></img></div>
                        </button>
                    </div> 
                     
                </div>
                
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body card-paypal-body">
                    <div className="row justify-content-between"> 
                        <div className="col-6">Your subscription - 1 month  Plan </div>
                        <div className="col-2">EUR {price}</div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-4">VAT 24% Greece</div>
                        <div className="col-2">EUR {this.vatCalc(price)}</div>
                
                <div>
                    <button className="paypal-button" type="submit">
                        <span className="paypal-button-title">
                        Buy now with
                        </span>
                        <span className="paypal-logo">
                        <i className="Pay">Pay</i><i className="Pal">Pal</i>
                        </span>
                    </button>
                    <div className="badge bg-primary text-wrap">30-day money-back guarantee</div>
                </div>
                    <div className="paypal-footer">
                    By clicking Complete purchase, you agree to our <b>Terms and Conditions.</b> Learn how we collect, use and share your data in our <b>Privacy Policy.</b> If you do not wish to receive information about <b>DailyVPN</b> services, please send us an email at <b>support@DailyVPN.com</b>. You can cancel recurring payments at any time.
                    <div>This order process is conducted by our online reseller cleverbridge AG. Payment processing and order fulfillment are done by cleverbridge AG, Gereonstr. 43-65, 50670 Cologne, Germany.
                    <div><b>Terms & Conditions Contact Right of Revocation Security Legal Info Privacy Policy</b></div>
                </div>
                </div>

                </div>
                </div>
                </div>
                </div>
                    
            </div>
                </form>
        </div>
            <Footer/>        
        </div>           
        )
    }
}
