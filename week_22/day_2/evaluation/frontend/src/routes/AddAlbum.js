import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addNewAlbum} from '../redux/action'
import Navbar from './Navbar'
import { Redirect } from 'react-router-dom'

export class AddAlbum extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             albumName : '',
             artistName : 'selectArtistName',
             year : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleClick = () => {
        let newAlbumDetails = {
            albumName : this.state.albumName,
            artistName : this.state.artistName,
            year : this.state.year
        }
        console.log(newAlbumDetails)
        this.props.addNewAlbum(newAlbumDetails)
    }
    
    render() {
        if(this.props.loginStatus){
        return (
            <div className="container" >
                <Navbar />
                <div className="w-50 mx-auto mt-5">
                    <label htmlFor="albumName">Album</label>
                    <input type="text" className="form-control mb-2" value={this.state.albumName} id="albumName" onChange={this.handleChange} />
                    <label htmlFor="artistName">Artist</label>
                    <select name="" value={this.state.artistName} id="artistName" onChange={this.handleChange} className="form-control mb-2" >
                        <option value="selectArtistName">Select</option>
                        {
                            this.props.artistArr.map( artist => <option value={artist} key={artist}>{artist}</option> )
                        }
                    </select>
                    <label htmlFor="year">Year</label>
                    <input type="number"  id="year" value={this.state.year} onChange={this.handleChange} className="form-control mb-2" />
                    <button className="btn btn-block btn-warning" onClick={this.handleClick}>Add album</button>
                </div>
            </div>
        )}
        else {
            return <Redirect to='/login' />
        }
    }
}

const mapStateToProps = (state) => ({
    artistArr : state.artistArr,
    loginStatus : state.loginStatus
})

const mapDispatchToProps = dispatch => ({
    addNewAlbum : (payload) => dispatch(addNewAlbum(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddAlbum)
