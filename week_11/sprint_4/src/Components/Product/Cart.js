import React, { Component } from 'react'
import CartRow from './CartRow'

export class Cart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             total: 0
        }
    }
    

    total = () => {
        var data = this.props.data
        var totalSum = 0
        data.forEach((e) => {
            totalSum+= Number(e.price)
        })
        this.setState({ total: totalSum})
    }


    render(props) {
        return (
            <div className="col-2">
                <table className="table">
                    <thead>
                        <tr>
                            <td>Items added</td>
                            <td>Price</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {this.props.data.map(e => <CartRow key={e.key} data={e} />)}
                        </tr>
                    </tbody>
                </table>
                <div onLoad={this.total}>Total : {this.state.total}</div>
                <button className="btn btn-block btn-danger"> Buy Now</button>
            </div>
        )
    }
}

export default Cart
