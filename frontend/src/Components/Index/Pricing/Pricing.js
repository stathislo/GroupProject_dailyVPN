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
                    <div className="pricing-columns col-lg-4 col-md-6 text-center">
                        <div className="card">
                            <div className="card-header">
                                <h3>1 Month Plan</h3>
                            </div>
                            <div className="card-body">
                                <h2>$10.99 <small className="text-muted">/ mo</small></h2>
                                <h5>Up to 5 Devices</h5>
                                <h5>Limited Bandwith<small className="text-muted">/ 10Mbps</small></h5>
                                <h5><small className="text-muted">Save 0%</small></h5>
                                <a href="/product1/product_low"><button type="button" className="btn btn-outline-primary btn-lg w-100">Sign up</button></a>
                            </div>
                        </div>
                    </div>


                    <div className="pricing-columns col-lg-4 col-md-6 text-center">
                        <div className="card">
                            <div className="card-header">
                                <h3>1 Year Plan</h3>
                            </div>
                            <div className="card-body">
                                <h2>$5.99 <small className="text-muted">/ mo</small></h2>
                                <h5>Up to 10 Devices</h5>
                                <h5>Limited Bandwith<small className="text-muted">/ 20Mbps</small></h5>
                                <h5><small className="text-muted">Save 50%</small></h5>
                                <a href="/product2/product_medium"><button type="button" className="btn btn-outline-danger w-100 btn-lg">Sign up</button></a>
                            </div>
                        </div>
                    </div>

                    <div className="pricing-columns col-lg-4 col-md-12 text-center">
                        <div className="card">
                            <div className="card-header">
                                <h3>2 Year Plan</h3>
                            </div>
                            <div className="card-body">
                                <h2>$1.99 <small className="text-muted">/ mo</small></h2>
                                <h5>Unlimited Devices</h5>
                                <h5>Unlimited Bandwith<small className="text-muted">/ 200Mbps</small></h5>
                                <h5><small className="text-muted">Save 66%</small></h5>
                                <a href="/product3/product_high"><button type="button" className="btn btn-outline-warning btn-lg w-100">Sign up</button></a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}
