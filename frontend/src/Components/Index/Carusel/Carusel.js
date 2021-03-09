import React, { Component } from 'react'
import './Carusel.css'
import img1 from '../Images/bill.jpg'
import img2 from '../Images/elon.jpg'
import techcrunch from '../Images/techcrunch.png'
import tnw from '../Images/tnw.png'
import mysql from '../Images/mysql.png'
import microsoft from '../Images/microsoft.png'



export default class Carusel extends Component {
    render() {
        return (
            <div>

                <section id="testimonials">

                    <div id="testimonial-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4500"
                        data-bs-pause="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <h2 className="testimonial-text">DailyVPN provides excelent VPN functionality keeping you safe while working online</h2>
                                <img className="testimonial-img1" src={img1} alt="billy" />
                                <em> Bill, Silicon Valley San Fransisco</em>
                            </div>

                            <div className="carousel-item">
                                <h2 className="testimonial-text">Fast reliable and secure VPN solution for every device giving you unlimited opportunities </h2>
                                <img className="testimonial-img2" src={img2} alt="elon" />
                                <em>Elon, New York</em>
                            </div>
                        </div>

                        <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </a>

                    </div>

                </section>

                <section id="press">
                    <img className="press-logo" src={techcrunch} />
                    <img className="press-logo" src={tnw} />
                    <img className="press-logo" src={mysql} />
                    <img className="press-logo" src={microsoft} />

                </section>






            </div>
        )
    }
}
