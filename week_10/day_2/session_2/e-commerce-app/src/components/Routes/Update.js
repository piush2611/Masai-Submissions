import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editProduct } from '../Redux/Action'

export class Update extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title:"",
            price:0,
            rating:0,
            category:"",
            src:"",
            id:0
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        let id = this.props.match.params.id
        let data = this.props.data.filter(e => e.id == id)
        this.setState({
            title:data[0].title,
            price:data[0].price,
            rating:data[0].rating,
            category:data[0].category,
            src:data[0].src,
            id:data[0].id
        })
    }
    
    updateInfo = () => {
        let data = {
            title:this.state.title,
            price:this.state.price,
            rating:this.state.rating,
            category:this.state.category,
            src:this.state.src,
            id:this.state.id
        }
        this.props.editProduct(data)
        alert("Data updated")
    }

    handleGoBack = () => {
        this.props.history.push('/addProduct')
    }

    render() {
        return (
            <div className="container p-5">
                <button className="my-2 btn btn-outline-info" onClick={this.handleGoBack}>Go back</button>
                <br/>
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
                <button className="btn btn-outline-info mt-2" onClick={this.updateInfo}>Update</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.data
})

const mapDispatchToProps = dispatch =>({
    editProduct: (payload) => dispatch(editProduct(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Update)
