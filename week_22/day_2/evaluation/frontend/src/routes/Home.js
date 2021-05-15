import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios'
import { fetchAlbums, fetchArtists, getSortedAlbums, fetchAlbumsByArtistName, deleteAlbum, getData, updateAlbum } from '../redux/action'

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            artist: '',
            order: '',
            show: false,
            id: null,
            albumName: '',
            artistName: 'selectArtistName',
            year: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(e.target.value)

        if (e.target.value == 'getAll') {
            this.props.getAlbums()
        }
        else if (e.target.value != '...' && e.target.id == "artist") {
            this.props.fetchAlbums(e.target.value)
        }
    }

    setId = (id) => {
        this.setState({
            id: id
        })
    }

    handleEdit = () => {
        let newAlbumDetails = {
            albumName: this.state.albumName,
            artistName: this.state.artistName,
            year: this.state.year,
            id: this.state.id
        }
        this.props.updateAlbum(newAlbumDetails)
    }

    handleDelete = () => {
        this.props.deleteAlbum(this.state.id)
    }

    getData = (id) => {
        axios({
            method: 'post',
            baseURL: `http://127.0.0.1:5000/album/read`,
            data: {
                id: id
            }
        })
            .then(res => {
                console.log(res)
                this.setState({
                    artistName: res.data.albums['artistName'],
                    albumName: res.data.albums['albumName'],
                    year: res.data.albums['year'],
                    id: res.data.albums['id']
                })
            })
            .catch(err => console.log(err))

    }



    handleAscSort = () => {
        this.props.getSortedAlbums('asc')
        this.setState({
            show: !this.state.show
        })
    }

    handleDescSort = () => {
        this.props.getSortedAlbums('desc')
        this.setState({
            show: !this.state.show
        })
    }

    componentDidMount() {
        this.props.getArtists()
        this.props.getAlbums()
    }
    render() {
        if (this.props.loginStatus) {
            return (
                <>
                    <div className="container p-3 table-responsive">
                        <Navbar />
                        <h1 className="text-center display-3">Music Albums</h1>
                        {
                            this.props.isAdmin ?
                                <>
                                    <div className="d-flex-justify-content-around">
                                        <Link className="btn btn-primary mx-1" to='/addAlbum' >Add album</Link>
                                        <Link className="btn btn-primary mx-1" to='/addArtist' >Add artist</Link>
                                    </div>
                                </>
                                :
                                null
                        }
                        <div className="my-2">
                            <select name="" id="artist" value={this.state.artist} onChange={this.handleChange} className='form-control' >
                                <option value="...">Filter by artist</option>
                                <option value="getAll">All</option>
                                {
                                    this.props.artists.map(artist => <option value={artist} key={artist}>{artist}</option>)
                                }
                            </select>
                        </div>

                        <table className="table">
                            <thead>
                                <tr>
                                    <td>Artist</td>
                                    <td>Album</td>
                                    <td className='d-flex justify-content-around'>Year
                                    {
                                            this.state.show ?
                                                <button className="btn btn-primary text-white font-weight-bold" onClick={this.handleDescSort} >↑</button>
                                                :
                                                <button className="btn btn-primary text-white font-weight-bold" onClick={this.handleAscSort}>↓</button>
                                        }
                                    </td>
                                    {
                                        this.props.isAdmin ?
                                            <>
                                                <td>Delete</td>
                                                <td>Edit</td>
                                            </>
                                            :
                                            null
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.albums.map(album =>
                                        <tr key={album.id}>
                                            <td>{album.artistName}</td>
                                            <td>{album.albumName}</td>
                                            <td>{album.year}</td>
                                            {
                                                this.props.isAdmin
                                                    ?
                                                    <>
                                                        <td>
                                                            <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal" onClick={() => this.setId(album.id)} >Delete</button>
                                                        </td>
                                                        <td><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal1" onClick={() => this.getData(album.id)} >Edit</button></td>
                                                    </>
                                                    : null
                                            }
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                    {/* modal for delete confirmation */}
                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Are you sure you want to delete it ?</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleDelete} >Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* modal for update confirmation */}
                    <div className="modal fade" id="exampleModal1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Update album</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <label htmlFor="albumName">Album</label>
                                    <input type="text" className="form-control mb-2" value={this.state.albumName} id="albumName" onChange={this.handleChange} />
                                    <label htmlFor="artistName">Artist</label>
                                    <select name="" value={this.state.artistName} id="artistName" onChange={this.handleChange} className="form-control mb-2" >
                                        <option value="selectArtistName">Select</option>
                                        {
                                            this.props.artistArr.map(artist => <option value={artist} key={artist}>{artist}</option>)
                                        }
                                    </select>
                                    <label htmlFor="year">Year</label>
                                    <input type="number" id="year" value={this.state.year} onChange={this.handleChange} className="form-control mb-2" />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleEdit} >Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        else {
            return <Redirect to='/login' />
        }
    }
}

const mapStateToProps = (state) => ({
    loginStatus: state.loginStatus,
    albums: state.albumsDb,
    artists: state.artistArr,
    isAdmin: state.isAdmin,
    data: state.dataForEditingAlbum,
    artistArr: state.artistArr
})

const mapDispatchToProps = dispatch => ({
    getAlbums: () => dispatch(fetchAlbums()),
    getArtists: () => dispatch(fetchArtists()),
    getSortedAlbums: (payload) => dispatch(getSortedAlbums(payload)),
    fetchAlbums: (payload) => dispatch(fetchAlbumsByArtistName(payload)),
    getData: (payload) => dispatch(getData(payload)),
    deleteAlbum: (payload) => dispatch(deleteAlbum(payload)),
    updateAlbum: (payload) => dispatch(updateAlbum(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
