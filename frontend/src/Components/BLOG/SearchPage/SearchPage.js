import React, { Component } from 'react'
import "./SearchPage.css"

export default class SearchPage extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        console.log(this.props.location.search)
    }
    render() {
        return (
            <div>
                <h1>I am from search page</h1>
            </div>
        )
    }
}
