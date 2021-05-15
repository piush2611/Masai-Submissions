import React, { Component } from 'react'
import TableRow from './TableRow'

export class ProductTable extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             filterSelected: ''
        }
    }
    handleChange = (event) => {
        this.setState({
            filterSelected: event.target.value
        })
    }
    
    render(props) {
        return (
            <div className="col-7">
                <div className="row">
                    <col-4>
                    <select name="category" id="" value={this.state.filterSelected}  onChange={this.handleChange} className="form-control mb-2">
                        <option value="..">...</option>
                        <option value="bedroom">Bedroom</option>
                        <option value="living">Living room</option>
                        <option value="dining">Dining</option>
                        <option value="appliances">Appliances</option>
                    </select>
                    <button onClick={this.props.handleFilter.bind(this, this.state.filterSelected)} className="btn btn-primary">Sort by category</button>
                    </col-4>
                </div>
                <table className="table my-2" >
                    <thead>
                        <tr>
                            <td>Product name</td>
                            <td>Id</td>
                            <td>Description</td>
                            <td>Category</td>
                            <td>Material</td>
                            <td>Price</td>
                            <td>Add to cart</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map(e => <TableRow key={e.key} data={e} addToCart={this.props.addToCart} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable
