import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from '../components/common/Navbar'
import { Redirect, Link } from 'react-router-dom'
import Pagination from '../components/common/Pagination'
import { sort, filterByFloor, setLoginStatus, searchByDate } from '../redux/action'

export class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             startPage : 0,
             endPage : 6,
             sort: '',
             filter: '',
             pageNumber: 1,
             startDate : '2020-02-11',
             endDate : '2020-12-10'
        }
    }

    handlePagination = (num) => {
        this.setState({
            startPage : num*6 - 6,
            endPage : num*6,
            pageNumber: num
        })
    }

    handleChange = (e) => {
        let value = e.target.value
        if( value === "sortByPriceAsc"){
            this.props.sort({ sortBy : 'price', sortOrder : 'asc'})
        }
        else if( value === 'sortByPriceDesc'){
            this.props.sort({ sortBy : "price", sortOrder: 'desc'})
        }
        else if( value === "sortByCapacityAsc"){
            this.props.sort({ sortBy : "capacity", sortOrder : 'asc'})
        }
        else if( value === 'sortByCapacityDesc'){
            this.props.sort({ sortBy : 'capacity', sortOrder : 'desc'})
        }
        else if( Number(value) === 1 || 2 || 3 || 4 || 'all'){
            this.props.filterByFloor(value)
        }
    }

    handleDate = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSearch = () => {
        this.props.searchByDate(this.state.startDate.split('-').join(''))
    }

    
    render() {
        return (
            <div className="bg-light container-fluid">
            <div className="container">
                {
                    !this.props.loginStatus ? 
                    <Redirect to='/login'></Redirect>
                    :
                    null
                }
                <Navbar token={this.props.userId} logout={() =>this.props.logout()} login={this.props.loginStatus} />
                <div className="jumbotron mt-3">
                    <div className="row justify-content-around p-2">
                    <div className="col-12 col-md-5 p-2">
                        <div className="display-4">BOOK YOUR <br/> MEETING <br/> ROOM NOW</div>
                    </div>
                    <div className="col-12 col-md-5 p-1">
                        <input type="date" name="startDate" onChange={this.handleDate} value={this.state.startDate} className="form-control mb-2" />
                        <input type="date" name="endDate" onChange={this.handleDate} value={this.state.endDate} className="form-control mb-2" />
                        <button className="btn btn-success mb-2 btn-block" onClick={this.handleSearch}>Search</button>
                        <select name="sort" value={this.state.sort} className="form-control mb-2" onChange={this.handleChange}>
                            <option value="">Sort </option>
                            <option value="sortByPriceAsc">Sort by price (Asc)</option>
                            <option value="sortByPriceDesc">Sort by price (Desc)</option>
                            <option value="sortByCapacityAsc">Sort by capacity (Asc)</option>
                            <option value="sortByCapacityDesc">Sort by capacity (Desc) </option>
                        </select>
                    
                        <select name="filter" value={this.state.filter} className="form-control" onChange={this.handleChange}>
                            <option value="">Filter( Floor )</option>
                            <option value="all">all</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                    </div>
                    </div>
                </div>
                    
                <div className="row p-5">
                    { this.props.database.slice(this.state.startPage, this.state.endPage).map(room => 
                        <div className="col-12 col-md-6 col-lg-4 p-2" key={room.id}>
                            <img src={room.src} className="img-thumbnail" alt="" />
                            <div className="p-2">
                                <div className="font-weight-bold text-dark">{room.name}</div>
                                <div className="font-weight-bold text-dark">Floor : {room.floor}</div>
                                <div className="font-weight-bold text-dark">Capacity : {room.capacity}</div>
                                <div className="font-weight-bold text-dark">Price : ₹ {room.price} / month</div>
                            </div>
                            <Link to={`/bookingPage/${room.id}`} ><button className="btn btn-info btn-block m-2">Book Now</button></Link>
                        </div>
                    )}
                </div>
                <div className="d-flex justify-content-center mb-5">
                    { this.state.pageNumber >= 2 ? <button className="btn btn-sm btn-info m-1 mt-3" onClick={() =>this.handlePagination(this.state.pageNumber-1)}>Prev</button> : null }
                    <Pagination len={Math.ceil(this.props.database.length/6)} func={this.handlePagination} />
                    { this.state.pageNumber < Math.ceil(this.props.database.length/6)  ? <button className="btn btn-sm btn-info m-1 mt-3" onClick={() => this.handlePagination(this.state.pageNumber + 1)}>Next</button> : null }
                </div>
                
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    database : state.database,
    loginStatus : state.loginStatus,
    userId : state.userId
})

const mapDispatchToProps =  dispatch =>({
    sort : (payload) => dispatch(sort(payload)),
    filterByFloor: (payload) => dispatch(filterByFloor(payload)),
    searchByDate: (payload) => dispatch(searchByDate(payload)),
    logout: (payload) => dispatch(setLoginStatus(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
