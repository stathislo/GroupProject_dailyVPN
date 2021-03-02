import React, { Component } from 'react'
import axios from "axios"

export default class ProductMedium extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        axios.get("http://localhost:5000/product/" + this.props.match.params.name)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
            this.props.history.push("/error")
        })
    }
    render() {
        return (
            <div>
                Product medium
            </div>
        )
    }
}
