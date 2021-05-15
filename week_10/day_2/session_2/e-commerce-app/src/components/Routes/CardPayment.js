import React, { Component } from 'react'

export class CardPayment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             cardNo:"",
             otp:""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        this.props.history.push("/orderPlaced")
    }
    
    render() {
        return (
            <div className="container p-5 w-50">
                <h3 className="text-dark mb-2">Payment</h3>
                Total: 15000/-
                <label htmlFor="card">Card</label>
                <select name="" className="form-control mb-2">
                    <option value="..." selected></option>
                    <option value="credit">Credit</option>
                    <option value="debit">Debit</option>
                </select>
                <label htmlFor="upiId">Card number</label>
                <input type="text" name="upiId" onChange={this.handleChange} value={this.state.upiId} className="form-control mb-2"/>
                <label htmlFor="otp">OTP</label>
                <input type="text" name="otp" onChange={this.handleChange} value={this.state.otp} className="form-control mb-2" />
                <button className="btn btn-danger" onClick={this.handleClick}>Pay</button>
            </div>
        )
    }
}

export default CardPayment
