import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newRegistration } from '../Redux/Action'

export class AddNewRestaurant extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             restaurantName:"",
             city:"...",
             phone:"",
             email:"",
             ownerName:"",
             ownerMobile:"",
             openingStatus:".."
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        let data ={
            restaurantName:this.state.restaurantName,
            city:this.state.city,
            phone:this.state.phone,
            email:this.state.email,
            ownerName:this.state.ownerName,
            ownerMobile:this.state.ownerMobile,
            openingStatus:this.state.openingStatus,
            id: Math.floor(Math.random(1,10000)*100)
        }
        this.props.newRegistration(data)
        alert("Data submitted, we will get back to you")
    }
    
    render() {
        return (
            <div className="container p-5">
                <h4 className="text-dark">Restaurant Details</h4>
                <label htmlFor="restaurantName"> Restaurant Name</label>
                <input type="text" name="restaurantName" value={this.state.restaurantName} onChange={this.handleChange} className="form-control mb-1"/>
                <label htmlFor="city">City</label>
                <select name="city" className="form-control" onChange={this.handleChange}>
                    <option value="...">...</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="pune">Pune</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="wardha">Wardha</option>
                </select>
                <br/>
                <label htmlFor="phone">Mobile</label>
                <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} className="form-control mb-1"/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control mb-1" />
                <label htmlFor="openingStatus">Opening Status</label>
                <select name="openingStatus" className="form-control mb-1" onChange={this.handleChange}>
                    <option value="..">..</option>
                    <option value="already open">Already open</option>
                    <option value="opening soon ">Opening soon</option>
                </select>
                <h4 className="text-dark">Owner details</h4>
                <label htmlFor="ownerName">Name</label>
                <input type="text" name="ownerName" value={this.state.ownerName} onChange={this.handleChange} className="form-control mb-1" />
                <label htmlFor="ownerMobile">Mobile</label>
                <input type="text" name="ownerMobile" value={this.state.ownerMobile} onChange={this.handleChange} className="form-control mb-1" />
                <button className="btn btn-block btn-outline-success" onClick={this.handleClick}>Submit</button>
            </div>
        )
    }                

}



const mapDispatchToProps = dispatch => ({
    newRegistration: (payload) => dispatch(newRegistration(payload))
})

export default connect(null, mapDispatchToProps)(AddNewRestaurant)

