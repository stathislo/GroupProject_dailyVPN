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
                        <div className="left_content1">

                        </div>
                        <div className="right_content1">
                            <h4 className='right-content1-h4'>Going online is safer than ever before</h4>
                            <h1 className='right-content1-h1'><span className='right-content1-span'>Secure</span> & Anonymous Access</h1>
                            <h4 className='right-content-text'>DailyVPN provides total anonimity and security for your online data wherever you are.
                               Stay hidden and protected while accessing the web from everywhere.</h4>
                            <button onClick={this.onButtonClick} type="button" className="btn btn-danger btn-lg " id="btn-content1">Get Started</button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
