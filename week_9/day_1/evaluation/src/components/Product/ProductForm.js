import React, { Component } from 'react'

export class ProductForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            id : "",
            sellerName : "",
            category : "",
            cod : false,
            qntt : 0,
            data : []
        }
    }

    handleChange = (e) => {
        this.setState(
            {
                [e.target.name] : e.target.value
            }
        )
    }

    handleClick = () => {
        this.setState(
            
        )
    }

    render() {
        return (
            <div className="container">
                <input type="text" onChange={this.handleChange} name="name" placeholder="Product name" className="form-control m-1" />
                <input type="text" onChange={this.handleChange} name="id" placeholder="Product id" className="form-control m-1" />
                <input type="text" onChange={this.handleChange} name="sellerName" placeholder="Seller name" className="form-control m-1" />
                <input type="text" onChange={this.handleChange} name="category" placeholder="Category" className="form-control m-1" />
                <label htmlFor="cod">COD : </label>
                <input type="checkbox" name="cod" id="" onChange={this.handleChange}/>
                <input type="text" onChange={this.handleChange} name="qntt" placeholder="Quantity" className="form-control m-1" />
                <div className="text-center">
                <button className="btn btn-danger" onClick={this.handleClick}>SUBMIT</button>
                </div>
            </div>
        )
    }
}

export default ProductForm
