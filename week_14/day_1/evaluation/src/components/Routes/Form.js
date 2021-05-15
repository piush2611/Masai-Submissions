import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addVehicle } from '../Redux/Action'
import { Button, TextField, Typography } from '@material-ui/core';

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modelNo: "",
            modelName: "",
            manufacturer: "",
            mileage: "",
            price: "",
            qty: ""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = e => {

        let newVehicle = {
            modelNo: this.state.modelNo,
            modelName: this.state.modelName,
            manufacturer: this.state.manufacturer.toLocaleLowerCase(),
            mileage: Number(this.state.mileage),
            price: Number(this.state.price),
            qty: Number(this.state.qty),
            id: Math.random(1, 1000) * 100
        }
        this.props.addVehicle(newVehicle)

    }
    render() {
        return (
            <div style={{ padding: "100px", textAlign: "center" }}>
                <Typography variant="h3" color="primary">Add New vehicle</Typography>
                <TextField label="Model no" value={this.state.modelNo} name="modelNo" onChange={this.handleChange} />
                <br />
                <TextField label="Model name" value={this.state.modelName} name="modelName" onChange={this.handleChange} />
                <br />
                <TextField label="Manufacturer" value={this.state.manufacturer} name="manufacturer" onChange={this.handleChange} />
                <br />
                <TextField label="Mileage" value={this.state.mileage} name="mileage" onChange={this.handleChange} />
                <br />
                <TextField label="price" value={this.state.price} name="price" onChange={this.handleChange} />
                <br />
                <TextField label="quantity" value={this.state.qty} name="qty" onChange={this.handleChange} />
                <br />
                <Button onClick={this.handleClick} color="secondary" variant="outlined" className="my-2" >Add</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({
    addVehicle: (data) => dispatch(addVehicle(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
