import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
import { delVehicle, sortAsc, sortDesc, sortAscMfc, sortDescMfc } from '../components/Redux/Action'
import { Button, ButtonGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';


export class Table1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            perPage: 5,
            startingIndex: 0,
            endingIndex: 4,
            database: []
        }
    }

    componentDidMount() {
        this.setState({
            database: this.props.vehicleDatabase
        })
    }

    handleClick = (id) => {
        // this.props.delVehicle(id)
        this.setState({
            database: this.state.database.filter((a) => a.id !== id)
        })
    }

    handleChange = e => {
        if (e.target.value == "asc") {
            // this.props.sortAsc()
            this.setState({
                database: this.state.database.sort((a, b) => a.price - b.price)
            })
        }
        else if (e.target.value == "desc") {
            // this.props.sortDesc()
            this.setState({
                database: this.state.database.sort((a, b) => b.price - a.price)
            })
        }
    }

    handlePagination = n => {
        this.setState({
            startingIndex: n - 5,
            endingIndex: n
        })
    }


    render() {
        return (
            <div className="container p-5">

                {/* for pagination */}
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Pagination length={this.props.vehicleDatabase.length / 5} func={this.handlePagination} />
                </ButtonGroup>

                {/* data displayed in table */}
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Model no</TableCell>
                                <TableCell align="right">Model name</TableCell>
                                <TableCell align="right">Manufacturer</TableCell>
                                <TableCell align="right">
                                    <select name="mileage" onChange={this.handleChange} className="form-control">
                                        <option value="..." selected>Mileage</option>
                                        <option value="low">5 - 24</option>
                                        <option value="mid">25 - 50</option>
                                        <option value="high"> 51 - 75</option>
                                    </select>
                                </TableCell>
                                <TableCell align="right">
                                    <select name="price" onChange={this.handleChange} className="form-control">
                                        <option value="..." selected>Price</option>
                                        <option value="asc">Ascending</option>
                                        <option value="desc">Descending</option>
                                    </select>
                                </TableCell>
                                <TableCell align="right">Quantity</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.database.slice(this.state.startingIndex, this.state.endingIndex).map(row => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.modelNo}
                                    </TableCell>
                                    <TableCell align="right"><Link to={`/viewAll/${row.id}`}>{row.modelName}</Link></TableCell>
                                    <TableCell align="right">{row.manufacturer}</TableCell>
                                    <TableCell align="right">{row.mileage}</TableCell>
                                    <TableCell align="right">{row.price}</TableCell>
                                    <TableCell align="right">{row.qty}</TableCell>
                                    <TableCell align="right"><Button onClick={() => this.handleClick(row.id)} color="secondary" variant="outlined" >Delete</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    vehicleDatabase: state.vehicleDatabase
})

const mapDispatchToProps = dispatch => ({
    delVehicle: (payload) => dispatch(delVehicle(payload)),
    sortAsc: () => dispatch(sortAsc()),
    sortDesc: () => dispatch(sortDesc()),
    sortDescMfc: () => dispatch(sortDescMfc()),
    sortAscMfc: () => dispatch(sortAscMfc())
})

export default connect(mapStateToProps, mapDispatchToProps)(Table1)
