import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'   
import { addEmployee, fetchDepartmentNames } from '../redux/action'
import Navbar from '../components/Navbar'


export class AddEmployee extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name : '',
            department : '',
            gender : '',
            salary : 0 ,
            deptNames : []
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
    
    }

    handleChange = e => {
        this.setState({
          [e.target.id]: e.target.value
        });
    };
    
    handleSubmit = (e) => {
        e.preventDefault()
        let { name, department, gender, salary } = this.state;
        // this.props.addEmployee({name, department, gender, salary})
        axios({
            method : 'post',
            baseURL : 'http://127.0.0.1:5000/employee/create',
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
                <h1 className="my-2">Add employee</h1>
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
                         this.state.deptNames &&   this.state.deptNames.map( dept => <option value={dept} key={dept} >{dept}</option>)
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
    addEmployee : (payload) => dispatch(addEmployee(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee)
