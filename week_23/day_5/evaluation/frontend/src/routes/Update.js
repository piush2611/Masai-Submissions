import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Navbar from '../components/Navbar'
// import { Redirect } from 'react-router-dom'
import {  fetchDepartmentNames, employeeDetails, updateEmployee } from '../redux/action'

export class Update extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name : '',
            department : '',
            gender : '',
            salary : 0,
            id : 0,
            deptNames: []
        }
    }

    componentDidMount(){
        {/* fetching department names */}
        
        axios({
            method : 'get',
            baseURL : 'http://127.0.0.1:5000/employee/departments'
        })
        .then(res => {
            this.setState({
                deptNames : res.data.departments[0]['dept'].split(',')
            })
            console.log(res.data.departments[0]['dept'].split(','))
        })
        .catch(err => console.log(err))
        {/* fetching employee details */}
        let id = this.props.match.params.id

        axios({
            method : 'get',
            baseURL : `http://127.0.0.1:5000/employee/read/${id}`
        })
        .then(res => {
            console.log(res.data)
            this.setState({
            department : res.data.employee['department'],
            salary : res.data.employee['salary'],
            gender : res.data.employee['gender'],
            name : res.data.employee['name'],
            id : res.data.employee['id']
            })
        })
        .catch(err => console.log(err))
    }

    handleChange = e => {
        this.setState({
          [e.target.id]: e.target.value
        });
    };
    
    handleSubmit = (e) => {
        e.preventDefault()
        let { name, department, gender, salary, id } = this.state;
        axios({
            method : 'put',
            baseURL : `http://127.0.0.1:5000/employee/update/${id}`,
            data : {
                name : name,
               department :department,
                gender : gender,
                salary : salary
            }
        })
        .then( res => {
            console.log(res.data)
            this.props.history.push('/')
        })
        .catch(err => console.log(err))
    };
    
    render() {
        return (
            <>
            <Navbar />
            <div className="container mx-auto w-50">
                <h1 className="my-2">Update details</h1>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                    type="text"
                    value={this.state.name}
                    className="form-control"
                    id="name"
                    onChange={this.handleChange}
                    placeholder="Enter name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select id="gender" 
                        className="form-control" 
                        value={this.state.gender}
                        onChange={this.handleChange} >
                        <option value=''>Choose...</option>
                        <option value='M' >Male</option>
                        <option value='F' >Female</option>
                        <option value='O' >Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="salary">Salary</label>
                    <input
                    type="number"
                    className="form-control"
                    id="salary"
                    value={this.state.salary}
                    placeholder="Salary"
                    onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="department">Department</label>
                    <select id="department" 
                        className="form-control" 
                        value={this.state.department}
                        onChange={this.handleChange} >
                        <option value=''>Choose...</option>
                        {
                           this.state.deptNames && this.state.deptNames.map( dept => <option value={dept} key={dept} >{dept}</option>)
                        }
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                </form>
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    isLogin : state.isLogin,
    deptNames : state.deptNames
})

const mapDispatchToProps = dispatch => ({
    employeeDetails : (payload) => dispatch(employeeDetails(payload)),
    fetchDepartmentNames : () => dispatch(fetchDepartmentNames()),
    updateEmployee : (payload) => dispatch(updateEmployee(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Update)
