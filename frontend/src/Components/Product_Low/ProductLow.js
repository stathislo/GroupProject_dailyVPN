import React, { Component } from 'react'
import axios from "axios"
import "./ProductLow.css"
import Nav from "../Index/Nav/Nav"

export default class ProductLow extends Component {
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
            <div className='productLow'>
            <Nav />
            <div className='plan'>
            <div className='plan__text'>
                <h2 className='plan__h2'>Choosen plan</h2>
            </div>
            <form className='plan__form' onSubmit={this.onPayClick}>
                <input type='hidden' name='productId' value={_id}></input>
                <input type='hidden' name='email' value={email}></input>
                <input type='hidden' name='userId' value={userId}></input>
                <h1>Product low</h1>
                <h5>Product: {name}</h5>
                <h5>Price: {price}</h5>
                <p className='plan__p'>Billed every month</p>
                <h5 id="start_date"></h5>
                <h5 id="end_date"></h5>
                <button type='submit'>Go to pay</button>
                </form>
            </div>
            </div>
        )
    }
}
