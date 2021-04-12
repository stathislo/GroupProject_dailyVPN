import React, { Component } from 'react'
import './Pricing.css'
import axios from "axios"

export default class Pricing extends Component {
    constructor(props){
        super(props)
        this.state = {
            productId:""
        }
    }
    render() {
        return (
            <section id="pricing">

                <h2 className="text-center1">A Plan for Every User's Needs</h2>
                <h5 className="text-center1">Simple and affordable price plans for your Internet Protection.</h5>

                <div className="row ">
                    <div className="pricing-columns col-lg-4 col-md-7 text-center">
                        <div className="card">
                            <div className="pricing-card-header">
                                <h3>2 Year Plan</h3>
                            </div>
                            <div className="card-body">
                                <h2> &#8364;1.99  <small>/mo</small></h2>
                                <h5>Unlimited Devices</h5>
                                <h5>Unlimited Bandwith<small>/200Mbps</small></h5>
                                <h5><small className="text-muted">Save 66% </small></h5>
                                <a href="/product1/product_low"><button type="button" className="btn  btn-lg w-75 card-button">Sign up</button></a>
                            </div>
                        </div>
                    </div>


                    <div className="pricing-columns col-lg-4 col-md-7  text-center">
                        <div className="card">
                            <div className="pricing-card-header">
                                <h3>1 Year Plan</h3>
                            </div>
                            <div className="card-body">
                                <h2>&#8364;5.99 <small>/mo</small></h2>
                                <h5>Up to 10 Devices</h5>
                                <h5>Limited Bandwith <small>/20Mbps</small></h5>
                                <h5><small className="text-muted">Save 50%</small></h5>
                                <a href="/product2/product_medium"><button type="button" className="btn w-75 btn-lg card-button">Sign up</button></a>
                            </div>
                        </div>
                    </div>

                    <div className="pricing-columns col-lg-4 col-md-7  text-center">
                        <div className="card">
                            <div className="pricing-card-header">
                                <h3>1 Month Plan</h3>
                            </div>
                            <div className="card-body">
                                <h2>&#8364;10.99<small>/ mo</small></h2>
                                <h5>Up to 5 Devices</h5>
                                <h5>Limited Bandwith<small>/10Mbps </small></h5>
                                <h5><small className="text-muted">Save 0% </small></h5>
                                <a href="/product3/product_high"><button type="button" className="btn w-75 btn-lg  card-button">Sign up</button></a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}
