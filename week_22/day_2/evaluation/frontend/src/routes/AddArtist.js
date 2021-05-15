import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addNewArtist} from '../redux/action'
import Navbar from './Navbar'
import { Redirect } from 'react-router-dom'
export class AddArtist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             artistName : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleClick = () => {
        this.props.addNewArtist(this.state.artistName)
    }
    
    render() {
        if(this.props.loginStatus){
        return (
            <div className="container"> 
            <Navbar />
                <div className="w-50 mx-auto mt-5">
                    <label htmlFor="artistName">Artist</label>
                    <input type="text" value={this.state.artistName} id="artistName" onChange={this.handleChange} className="form-control mb-2" />
                    <button className="btn btn-block btn-warning" onClick={this.handleClick} >Add Artist</button>
                </div>
            </div>
        )
    }
    else {
        return <Redirect to='/login' />
    }
    }
}

const mapStateToProps = (state) => ({
    loginStatus : state.loginStatus
})

const mapDispatchToProps = dispatch => ({
    addNewArtist : (payload) => dispatch(addNewArtist(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddArtist)
