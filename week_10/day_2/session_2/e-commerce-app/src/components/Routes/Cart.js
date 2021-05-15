import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  incQty, decQty } from '../Redux/Action'

export class Cart extends Component {

    handleOrder = () => {
        this.props.history.push("/order")
    }

    handleInc = (id) => {
        this.props.incQty(Number(id))
    }

    handleDec = (id) => {
        this.props.decQty(Number(id))
    }
    render() {
        return (
            <div className="container">
                <div className="p-3">
                    <table className="table-responsive table">
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Qty</td>
                                <td>Price</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.cartData.map(e => 
                                <tr key={e.id}>
                                    <td className="">{e.title}</td>
                                    <td className="w-50">
                                        <button className="btn-sm btn-info mr-1" onClick={() => this.handleDec(e.id)}>-</button>
                                        {e.count}
                                        <button className="btn-sm btn-info ml-1" onClick={() => this.handleInc(e.id)}>+</button>
                                    </td>
                                    <td>{e.price*e.count}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="mt-2 p-2">
                    <button onClick={this.handleOrder} className="btn btn-outline-success">Order now</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart,
    cartData: state.cartData
})

const mapDispatchToProps = dispatch => ({
    incQty: (payload) => dispatch(incQty(payload)),
    decQty: (payload) => dispatch(decQty(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
