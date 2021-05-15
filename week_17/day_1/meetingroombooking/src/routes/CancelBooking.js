import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cancelBooking, setLoginStatus } from '../redux/action'
import Navbar from '../components/common/Navbar'

export class CancelBooking extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : '',
             price : '',
             transactionId: 6515484
        }
    }
    
    componentDidMount(){
        let id = this.props.match.params.id
        let room = this.props.data.filter(e => e.id == id)
        console.log(room)
        this.setState({
            name : room[0]['name'],
            price: room[0]['price']
        })
    }

    handleCancel = () => {
        let id = this.props.match.params.id
        this.props.cancel(id)
        alert('Booking canceled !!')
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="container">
                <Navbar token={this.props.userId} logout={this.props.logout}  login={this.props.loginStatus} />
                <div className=" row p-5">
                    <div className="col-12 col-md-6">
                        <h5>Room : {this.state.name}</h5>
                        <h5>Price : {this.state.price}</h5>
                        <h5>Transaction id : {this.state.transactionId}</h5>
                        <button className="btn btn-info" onClick={this.handleCancel}>Cancel Booking</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  data: state.bookedMeetingRooms,
  userId : state.userId,
  loginStatus : state.loginStatus
})

const mapDispatchToProps =  dispatch => ({
    cancel: (payload) => dispatch(cancelBooking(payload)),
    setLoginStatus: (payload) => dispatch(setLoginStatus(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(CancelBooking)
