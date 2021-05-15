import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProduct, delProduct } from '../Redux/Action'
import { Link } from 'react-router-dom'

export class AddProduct extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:"",
             price:0,
             rating:0,
             category:"",
             src:""
        }
    }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addNewProduct = () => {
        let newProduct = {
             title:this.state.title,
             price:this.state.price,
             rating:this.state.rating,
             category:this.state.category,
             src:this.state.src,
             id: Math.floor(Math.random(1,1000))
        }

        this.props.addProduct(newProduct)
    }

    deleteProduct =(id) => {
        this.props.delProduct(Number(id))
    }

    
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">E-commerce</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><Link to="/addProduct" className="nav-link">Add product</Link></li>
                            <li className="nav-item active"><Link to="/cart" className="nav-link">Cart</Link></li>
                            <li className="nav-item active"><Link to="/order" className="nav-link">Order</Link></li>
                        </ul>
                    </div>
                </nav>
                <div className="p-3">
                    <button type="button" className="btn btn-primary ml-2" data-toggle="modal" data-target="#exampleModal">
                    Add new product
                    </button>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add product</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        
                                <label htmlFor="title">Product name</label>
                                <input type="text" name="title" className="form-control mb-2" onChange={this.handleChange} value={this.state.title}  />
                                <label htmlFor="price">Price</label>
                                <input type="text" name="price" className="form-control mb-2" onChange={this.handleChange} value={this.state.price}  />
                                <label htmlFor="rating">Rating</label>
                                <input type="text" name="rating" className="form-control mb-2" onChange={this.handleChange} value={this.state.rating}  />
                                <label htmlFor="category">Category</label>
                                <input type="text" name="category" className="form-control mb-2" onChange={this.handleChange} value={this.state.category}  />
                                <label htmlFor="src">Image url</label>
                                <input type="text" name="src" className="form-control mb-2" onChange={this.handleChange} value={this.state.src} />
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.addNewProduct}>Add</button>
                        </div>
                        </div>
                    </div>
                    </div>

                    <table className="table table-responsive m-2">
                        <thead className="bg-primary text-white">
                            <tr>
                                <td>Product name</td>
                                <td>Update</td>
                                <td>Delete</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.data.map(e =>
                                    <tr key={e.id}>
                                        <td>{e.title}</td>
                                        <td><button className="btn btn-outline-warning"><Link to={`/addProduct/${e.id}`}>Update</Link></button></td>
                                        <td><button className="btn btn-outline-danger" onClick={() => this.deleteProduct(e.id)}>Delete</button></td>
                                    </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.data
})

const mapDispatchToProps = dispatch => ({
    addProduct: (payload) => dispatch(addProduct(payload)),
    delProduct: (payload) => dispatch(delProduct(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)
