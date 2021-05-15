import React, { Component } from 'react'
import { connect } from 'react-redux'
import { totalOrdersPlaced } from '../Redux/Action'

export class Orders extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             address:"",
             phone:"",
             payment:"..."
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOrder = () => {
        if(this.state.payment == "card"){
            this.props.history.push("/cardPayment")
        }
        else if(this.state.payment == "upi"){
            this.props.history.push("/upiPayment")
        }
        else{
            this.props.history.push("/orderPlaced")
        }

        this.props.totalOrdersPlaced(this.props.cartData)
    }

    
    
    render() {
        return (
            <div className="container p-5 w-50">
                <div className="row justify-content-around">
                    <div className="col-12 col-md-6 mb-3">
                        <h3 className="text-center">Products in cart</h3>
                        <div className="d-flex justify-content-between">
                            <div>Product</div>
                            <div>Qty</div>
                            <div>Total</div>
                        </div>
                        {this.props.cartData.map(e => 
                            <div className="d-flex justify-content-between" key={e.id}>
                                <div className="text-dark">{e.title}</div>
                                <div className="text-success">{e.count}</div>
                                <div className="text-primary">{e.count*e.price}</div>
                            </div>
                        )}
                    </div>
                    <div className="col-12 col-md-5">
                        <h3>Fill your details</h3>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" onChange={this.handleChange} value={this.state.name} className="form-control mb-2" />
                        <label htmlFor="address">Address</label>
                        <textarea name="address" value={this.state.address} cols="10" rows="5" onChange={this.handleChange} className="form-control mb-2" ></textarea>
                        <label htmlFor="phone">Mobile </label>
                        <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} className="form-control mb-2" />
                        <label htmlFor="payment">Payment option</label>
                        <select className="form-control" name="payment" onChange={this.handleChange}>
                            <option value="..."></option>
                            <option value="card">Online payment(credit or debit cards)</option>
                            <option value="upi">UPI payment</option>
                            <option value="cash">Cash On Delivery</option>
                        </select>
                        {
                            this.state.payment != "..." ? 
                            (<button onClick={this.handleOrder} className="btn btn-outline-warning mt-2">Confirm order</button>)
                            :
                            (null)
                        }
                    </div> 
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cartData: state.cartData
})

const mapDispatchToProps = dispatch => ({
    totalOrdersPlaced: (payload) => dispatch(totalOrdersPlaced(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
