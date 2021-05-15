import React, { Component } from 'react'
import { connect } from 'react-redux'

export class TotalOrdersPlaced extends Component {

    handleClick = () => {
        this.props.history.push("/")
    }
    render() {
        return (
            <div className="container p-5">
                <button className="btn btn-outline-dark m-2" onClick={this.handleClick}>Go to homepage</button>
                <h3 className="m-2">Orders history</h3>
                <table>
                    <thead>
                        <tr>
                            <td>Name of product</td>
                            <td>Quantity</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map(e =>
                            <tr key={e.id}>
                                <td>{e.title}</td>
                                <td>{e.count}</td>
                            </tr>        
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  data: state.ordersPlaced  
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TotalOrdersPlaced)
