import React from 'react'
import './style.css'

class RestaurantDetails extends React.Component{
    render() {
        return (
            <div className="card"> 
                <div className="section">
                    <img src={this.props.obj.img}></img>
                    <div>
                        <div className="red">{this.props.obj.title}</div>
                        <p className="gray">{this.props.obj.category}</p>
                        <p className="gray"> Min 100 * Cost {this.props.obj.cost} for one</p>
                        <h4>{this.props.obj.payment}</h4>
                    </div>
                    <div>
                        <button>{this.props.obj.rating}</button>
                        <p className="gray">{this.props.obj.votes} votes</p>
                        <p className="gray">{this.props.obj.reviews} reviews</p>
                    </div>
                </div>
                <hr></hr>
                <button className="btnOrder">Order Online ></button>
            </div>
        )
    }
}

export default RestaurantDetails