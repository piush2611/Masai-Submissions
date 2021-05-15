import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateVehicle } from '../Redux/Action'
import { Button, TextField, Typography } from '@material-ui/core';

export class Update extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modelNo: 0,
            modelName: "",
            manufacturer: "",
            mileage: 0,
            price: 0,
            qty: 0,
            id: 0
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
            manufacturer: this.state.manufacturer,
            mileage: this.state.mileage,
            price: this.state.price,
            qty: this.state.qty,
            id: this.state.id
        }
        this.props.updateVehicle(newVehicle)
        alert("Data updated !!")
    }

    componentDidMount() {
        let id = this.props.match.params.id
        let data = this.props.vehicleDatabase.filter(e => e.id == id)

        this.setState({
            modelNo: data[0].modelNo,
            modelName: data[0].modelName,
            manufacturer: data[0].manufacturer,
            mileage: data[0].mileage,
            price: data[0].price,
            qty: data[0].qty,
            id: data[0].id
        })
    }

    handleGoBack = () => {
        this.props.history.push({ pathname: "/viewAll" })
    }

    render() {
        return (
            <div style={{ textAlign: "center", padding: "100px" }}>
                <Typography variant="h3" style={{ marginBottom: "10px" }}>Update your info</Typography>
                <Button variant="outlined" color="secondary" onClick={this.handleGoBack}>Go back</Button>
                <br />
                <br />
                <TextField label="Model no" value={this.state.modelNo} name="modelNo" onChange={this.handleChange} />
                <br />
                <br />
                <TextField label="Model name" value={this.state.modelName} name="modelName" onChange={this.handleChange} />
                <br />
                <br />
                <TextField label="Manufacturer" value={this.state.manufacturer} name="manufacturer" onChange={this.handleChange} />
                <br />
                <br />
                <TextField label="Mileage" value={this.state.mileage} name="mileage" onChange={this.handleChange} />
                <br />
                <br />
                <TextField label="price" value={this.state.price} name="price" onChange={this.handleChange} />
                <br />
                <br />
                <TextField label="quantity" value={this.state.qty} name="qty" onChange={this.handleChange} />
                <br />
                <br />
                <Button onClick={this.handleClick} color="secondary" variant="outlined" className="my-2" >Update</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    vehicleDatabase: state.vehicleDatabase
})

const mapDispatchToProps = dispatch => ({
    updateVehicle: (data) => dispatch(updateVehicle(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Update)
