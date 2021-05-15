import React, { Component } from 'react'
import ProductForm from './ProductForm'
import ProductTable from './ProductTable'
import Cart from './Cart'

export class Product extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            productName: '',
            productId: '',
            productDescription: '',
            category: '',
            material: '',
            price: '',
            dataBase: [],
            filteredData: [],
            cartData: []
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const collectedData = {
            productName : this.state.productName,
            productId: this.state.productId,
            productDescription: this.state.productDescription,
            category: this.state.category,
            material: this.state.material,
            price: this.state.price,
            key: Math.random(1, 100)*100
        }
        this.setState({
            dataBase: [...this.state.dataBase, collectedData],
            filteredData: [...this.state.dataBase]
        })
        console.log(this.state.dataBase)

    }

    handleFilter = (input) => {
        alert(input)
        const data = this.state.dataBase.filter(e => e.category === input)
        this.setState({
            filteredData: [...data]
        })
    }

    addToCart = (key) => {
        const dataForCart = this.state.dataBase.filter(e => e.key === key)
        this.setState({
            cartData: [...dataForCart]
        })
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <ProductForm details={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                    <ProductTable data={this.state.filteredData} handleFilter={this.handleFilter} addToCart={this.addToCart} />
                    <Cart data={this.state.cartData} />
                </div>
                    
            </div>
        )
    }
}

export default Product
