import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import { dataFetch, fetchDepartmentNames, filterBy, sortBy, deleteEmployee } from '../redux/action'
import { Redirect, Link } from 'react-router-dom'
import Pagination from './Pagination'

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            filterBy: '',
            sortBy: '',
            id : -1
        }
    }

    handleChange = (e) => {
        if (e.target.value != '' && e.target.id == 'filterBy') {
            this.props.filterBy(e.target.value)
            this.setState({ filterBy: e.target.value })
        }
        else if (e.target.value != '' && e.target.id == 'sortBy') {
            let order = e.target.value
            let filter = this.state.filterBy
            this.props.sortBy({ order, filter })
        }
    }

    deleteConfirmation = (id) => {
        this.setState({
            id : id
        })
    }

    componentDidMount() {
        {/* fetching employee data*/ }
        this.props.dataFetch()
        this.props.fetchDepartmentNames()
    }

    render() {
        if (this.props.isLogin) {
            return (
                <>
                    <Navbar />
                    <div className="container p-5">
                        <div className="d-flex my-2">
                            <select name="" id="filterBy" onChange={this.handleChange} value={this.state.filterBy} className="form-control mx-1" >
                                <option value="">Filter</option>
                                <option value="all">All</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                                {
                                    this.props.deptNames.map(dept => <option key={dept} value={dept}>{dept}</option>)
                                }
                            </select>
                            <select name="" id="sortBy" onChange={this.handleChange} className="form-control mx-1" >
                                <option value="">Sort by salary</option>
                                <option value="ASC">Asc</option>
                                <option value="DESC">Desc</option>
                            </select>
                        </div>

                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td>Sr. no</td>
                                        <td>Name</td>
                                        <td>Department</td>
                                        <td>Salary</td>
                                        <td>Gender</td>
                                        <td>Delete</td>
                                        <td>Update</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.data.map(emp =>
                                        <tr key={emp.id}>
                                            <td>{emp.id}</td>
                                            <td>{emp.name}</td>
                                            <td>{emp.department}</td>
                                            <td>{emp.salary}</td>
                                            <td>{emp.gender}</td>
                                            <td><button type="button" className="btn btn-sm btn-danger" data-toggle="modal" data-target="#exampleModal" onClick={() => this.deleteConfirmation(emp.id)} >Delete</button></td>
                                            <td><Link to={`/update/${emp.id}`} >Update</Link></td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <Pagination />

                            {/* modal for delete */}
                            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Are you sure you want to delete ?</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => this.props.handleDelete(this.state.id)} >Delete</button>
                                </div>
                                </div>
                            </div>
                            </div>
                    </div>
                </>
            )
        }
        else return <Redirect to='/login' />
    }
}


const mapStateToProps = (state) => ({
    isLogin: state.isLogin,
    data: state.data,
    deptNames: state.deptNames
})

const mapDispatchToProps = dispatch => ({
    dataFetch: () => dispatch(dataFetch()),
    sortBy: (payload) => dispatch(sortBy(payload)),
    filterBy: (payload) => dispatch(filterBy(payload)),
    handleDelete: (payload) => dispatch(deleteEmployee(payload)),
    fetchDepartmentNames: () => dispatch(fetchDepartmentNames())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
