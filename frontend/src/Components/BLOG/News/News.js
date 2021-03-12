import React, { Component } from 'react'
import "./News.css"
import axios from "axios"

export default class News extends Component {
    constructor(props){
        super(props)
        this.state = {

        }

        axios.get("http://localhost:7000/getPostsByCategory/" + this.props.match.params.name)
        .then(res=>{
            console.log(res)
            // axios.get("http://localhost:5000/main", { withCredentials:true })
            // .then(user=>{
            //     console.log(user)
            //     console.log(res)
            // })
            // .catch(err=>{
            //     console.log(err)
            // })
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                test
            </div>
        )
    }
}
