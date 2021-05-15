import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from '../components/common/Navbar'
import { Link, Redirect } from 'react-router-dom'
import { setLoginStatus } from '../redux/action'

export class Orders extends Component {
    render() {
        return (
            <div className="container">
                <Navbar token={this.props.userId} logout={() =>this.props.logout()} login={this.props.loginStatus} />
                {
                    !this.props.loginStatus ?
                    <Redirect to='/login' />:
                    null
                }
                <div className="row p-5 mt-4">
                    {
                        this.props.bookedMeetingRooms.map(room => 
                            <div className="col-12 col-md-6 col-lg-4 p-2" key={room.id}>
                                <img src="https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-thumbnail" alt="" />
                                <div className="p-2">
                                    <div>{room.name}</div>
                                    <div>Floor : {room.floor}</div>
                                    <div>Capacity : {room.capacity}</div>
                                    <div>Status: Booked</div>
                                    <Link to={`/cancelBooking/${room.id}`}><button className="btn btn-block btn-warning">Click</button></Link>
                                </div>
                            </div>    
                        )
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  bookedMeetingRooms : state.bookedMeetingRooms,
  loginStatus : state.loginStatus,
  userId : state.userId
})

const mapDispatchToProps = dispatch => ({
    logout: (payload) => dispatch(setLoginStatus(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
