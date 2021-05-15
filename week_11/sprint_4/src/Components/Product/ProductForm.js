import React, { Component } from 'react'

export class ProductForm extends Component {
    
    render(props) {
        return (
            <div className="col-3">
                <form>
                    <label htmlFor="">Product name</label>
                    <input  type="text"
                            placeholder="Product-name"
                            value={this.props.details.productName}
                            name="productName"
                            onChange={this.props.handleChange}
                            className="form-control mb-2" />
                    <label htmlFor="">Product Id</label>
                    <input  type="text"
                            placeholder="Product-name"
                            name="productId"
                            value={this.props.details.productId}
                            onChange={this.props.handleChange}
                            className="form-control mb-2" />
                    <label htmlFor="">Product description</label>
                    <input  type="textarea"
                            placeholder="Product-name"
                            value={this.props.details.productDescription}
                            name="productDescription"
                            onChange={this.props.handleChange}
                            className="form-control mb-2" />
                    <label htmlFor="">Category</label>
                    <select name="category" id="" value={this.props.details.category} onChange={this.props.handleChange} className="form-control mb-2">
                        <option value="bedroom">Bedroom</option>
                        <option value="living">Living room</option>
                        <option value="dining">Dining</option>
                        <option value="appliances">Appliances</option>
                    </select>
                    <label htmlFor="">Material</label>
                    <select name="material" id="" value={this.props.details.material} onChange={this.props.handleChange} className="form-control mb-2">
                        <option value="teak">Teak</option>
                        <option value="oak">Oak</option>
                        <option value="walnut">Walnut</option>
                        <option value="maple">Maple</option>
                    </select>
                    <label htmlFor="">Price</label>
                    <input  type="text"
                            placeholder="Product-price"
                            name="price"
                            value={this.props.details.price}
                            onChange={this.props.handleChange}
                            className="form-control mb-2" />
                    <button className="btn btn-success btn-block" onClick={this.props.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default ProductForm
