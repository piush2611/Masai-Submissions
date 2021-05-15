import { Link, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filter, addToCart, incQty, decQty, login, removeFromCart } from './Redux/Action'

export class Home extends Component {

    handleChange = e => {
        this.props.filter(e.target.value)
    }

    addToCart = (id) => {
        this.props.addToCart(Number(id))
    }

    handleOrder = () => {
        this.props.history.push("/order")
    }

    handleInc = (id) => {
        this.props.incQty(Number(id))
    }

    handleDec = (id) => {
        this.props.decQty(Number(id))
    }

    handleLogout = () => {
        this.props.history.push("/login")
    }

    handleRemove = (id) => {
        this.props.removeFromCart(Number(id))
    }

    render() {
        if (this.props.login) {
            return (
                <div className="container">
    
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/">E-commerce</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                {
                                    this.props.userType == "admin"
                                    ? 
                                    (<li className="nav-item active"><Link to="/addProduct" className="nav-link">Add product</Link></li>) 
                                    : 
                                    (null)
                                }
                                {
                                    this.props.cart && this.props.cartData.length ? 
                                    (
                                        <>
                                        <li className="nav-item active"><Link to="/cart" className="nav-link">Cart</Link></li>
                                        <li className="nav-item active"><Link to="/order" className="nav-link">Order</Link></li>
                                        </>   
                                    )
                                    :
                                    (null)
                                }
                                {
                                    this.props.ordersPlaced.length && this.props.userType == "admin" ?
                                    <li className="nav-item active"><Link to="/totalOrdersPlaced" className="nav-link">Orders Placed</Link></li>
                                    :
                                    (null)
                                }
                                <li className="nav-item active"><button className="btn btn-sm btn-outline-danger nav-link" onClick={this.handleLogout}>Logout</button></li>
                            </ul>
                        </div>
                    </nav>
                    <div>
                        <div className="m-2">Sort by category :</div>
                        <select name="sortByCategory" className="form-control w-25 mt-2 ml-3" onChange={this.handleChange}>
                            <option value="">All</option>
                            <option value="mobile">Mobiles</option>
                            <option value="watches">Watches</option>
                        </select>
                    </div>
                    
                    <div className="row">
                        <div className={this.props.cart && this.props.cartData.length ? "col-12 col-md-6 col-lg-8" : "col-12"}>
                            <div className="p-3 row">
                                {this.props.data.map(e =>
                                    <div className="col-12 col-md-6 col-lg-4 mb-3" key={e.id}>
                                        <img src={e.src} alt="" className="img-thumbnail" />
                                        <div className="p-3">
                                            <div className="text-dark my-1">{e.title}</div>
                                            <div className="text-dark font-weight-bold my-1"> ₹ {e.price}</div>
                                            <div className="text-dark my-1">{e.rating}*</div>
                                            <button className="btn btn-outline-primary" onClick={() => this.addToCart(e.id)}>Add to cart</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        {this.props.cart ? (
                            <div className={this.props.cartData.length == 0 ? "d-none" :"col-12 col-md-6 col-lg-4 d-sm-none d-md-block" }>
                                <div className="p-3">
                                    <h3 className="text-dark text-center">Shopping cart</h3>
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
                                                    <td><button className="btn btn-danger" onClick={() => this.handleRemove(e.id)}>X</button></td>
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
                        :
                        (null)
                        }
                        
                    </div>
                </div>
            )
        }
        else {
            return <Redirect to="/login" />
        }
    }
}

const mapStateToProps = (state) => ({
    login: state.login,
    data: state.tempData,
    cart: state.cart,
    cartData: state.cartData,
    userType: state.userType,
    ordersPlaced: state.ordersPlaced
})

const mapDispatchToProps = dispatch => ({
    filter: (payload) => dispatch(filter(payload)),
    addToCart: (payload) => dispatch(addToCart(payload)),
    incQty: (payload) => dispatch(incQty(payload)),
    decQty: (payload) => dispatch(decQty(payload)),
    removeFromCart: (payload) => dispatch(removeFromCart(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

