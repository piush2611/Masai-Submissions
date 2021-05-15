import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incQty, decQty, removeFromCart } from '../Redux/Action'
import { Link } from 'react-router-dom'

export class Cart extends Component {

    handelDecrement = (id) => {
        this.props.decQty(Number(id))
    }

    handleIncrement = (id) => {
        this.props.incQty(Number(id))
    }

    handleRemove = id => {
        this.props.removeFromCart(Number(id))
    }
    render() {
        return (
            <div className="container p-5">
                <table className="table table-responsive">
                    <thead>
                        <tr>
                            <td>Food item</td>
                            <td>Quantity</td>
                            <td>Total</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cartData.map(e => 
                            <tr key={e.id}>
                                <td>{e.title}</td>
                                <td><button className="btn btn-sm btn-outline-danger mr-1" onClick={() => this.handelDecrement(e.id)}>-</button>{e.count}<button className="ml-1 btn btn-sm btn-outline-success" onClick={() => this.handleIncrement(e.id)}>+</button></td>
                                <td>{e.price*e.count}</td>
                                <td><button className="btn btn-sm btn-outline-warning" onClick={() => this.handleRemove(e.id)}>X</button></td>
                            </tr>    
                        )}
                    </tbody>
                </table>
                <button className="btn btn-warning"><Link to="/order" className="text-dark">Order Now</Link></button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cartData: state.cartData
})

const mapDispatchToProps = dispatch => ({
    incQty: (payload) => dispatch(incQty(payload)),
    decQty: (payload) => dispatch(decQty(payload)),
    removeFromCart: (payload) => dispatch(removeFromCart(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

