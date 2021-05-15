import React, { Component } from 'react'
import ProductData from './ProductData'
import Cart from './Cart'


var cartData = [];
var totalPrice = 0;
export class ProductForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             id:"",
             desc:"",
             category:"",
             price:"",
             database: [],
             database2: [],
             showButton : false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        const data = {
            name: this.state.name,
            id: Math.random(1,100)*10,
            desc:this.state.desc,
            category: this.state.category,
            price: this.state.price
        }

        this.setState({
            database: [...this.state.database, data],
            database2: [...this.state.database2, data]
        })
    }

    addToCart = (id, price) => {
        var cart 
        totalPrice+= Number(price)
        this.state.database.filter(e => {
            if(e.id === id){
                cart= {name: e.name, price: e.price}
                cartData = [...cartData, cart]
            }
        })
        this.setState({showButton: true})
    }

    handleCategory = (e) => {
        const categoryData = this.state.database.filter(ele => ele.category === e.target.value)
        this.setState({ database2: categoryData})
    }
    
    render() {

        return (
            <div className="row m-3">
                <div className=" col-12 col-md-3 col-lg-2 ">
                    <h2 className="text-center text-dark">Add new item</h2>
                    <form action="">
                        <label htmlFor="name">Item name</label>
                        <input  type="text" 
                                name="name" 
                                onChange={this.handleChange} 
                                className="form-control" />
                        <label htmlFor="id">Item id</label>
                        <input  type="text" 
                                name="id" 
                                onChange={this.handleChange} 
                                className="form-control"/>
                        <label htmlFor="desc">Description</label>
                        <input  type="text"
                                name="desc" 
                                onChange={this.handleChange} 
                                className="form-control"/>
                        <label htmlFor="category">Category</label>
                        <select name="category" onChange={this.handleChange} className="form-control">
                            <option value="electronics">Electronics</option>
                            <option value="fashion">Fashion</option>
                            <option value="food">Food</option>
                        </select>
                        <label htmlFor="price">Price</label>
                        <input  type="text" 
                                name="price" 
                                onChange={this.handleChange} 
                                className="form-control"/>
                        <button className="btn btn-primary my-1" onClick={this.handleClick}>Submit</button>
                    </form>
                </div>

                <div className="col-12 col-md-6 col-lg-8">
                    <h2 className="text-center text-dark">Table showing newly added items</h2>
                    <table className="table table-responsive">
                        <thead>
                            <tr className="bg-light">
                                <td>Name</td>
                                <td>Id</td>
                                <td>Description</td>
                                <td>
                                    <select id="" onChange={this.handleCategory} className="form-control">
                                        <option value="fashion">Fashion</option>
                                        <option value="electronics">Electronics</option>
                                        <option value="food">Food</option>
                                    </select>
                                </td>
                                <td>Price</td>
                                <td>Add to cart</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.database2.map(e => <ProductData key={e.id} data={e} addToCart={this.addToCart} />)}
                        </tbody>
                    </table>
                </div>

                <div className="col-12 col-md-3 col-lg-2 p-2">
                    <h2 className="text-center text-dark">Cart</h2>
                    {cartData.map(e => <Cart key={e.name} data={e} />)}
                    <h4 className="text-center">Total : {totalPrice}</h4>
                </div>
            </div>
        )
    }
}

export default ProductForm
