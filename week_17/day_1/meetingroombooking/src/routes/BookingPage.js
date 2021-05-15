import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from '../components/common/Navbar'
import { bookMeetingRoom } from '../redux/action'

export class BookingPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            startDate : '',
            endDate : ''
        }
    }

    handleBooking = () => {
        let Id = this.props.match.params.id
        this.props.bookMeetingRoom({ id : Id, bookingTill : this.state.endDate.split('-').join('') })
        this.props.history.push('/confirmationPage')
    }

    handleDate = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <div className="container">
                    <Navbar token={this.props.userId} />
                    <div className="row p-5">
                        <div className="col-12 col-md-6 img-thumbnail">
                            <h3 className="m-2"> Booking-Id :  {this.props.bookingId}</h3>
                            <h3 className="m-2">Name : Piyush Saudagare</h3>
                            <h3 className="m-2">Company Name : Masai school </h3>
                            <h3 className="m-2">Time-frame  :
                                <div className="d-flex">
                                    <input type="date" name="startDate"  value={this.state.startDate} onChange={this.handleDate} className="form-control m-2" />
                                    <input type="date" name="endDate" onChange={this.handleDate} value={this.state.endDate} className="form-control m-2" />
                                </div>
                                </h3>
                            <h3 className="m-2">Transaction-id : 244155848</h3>
                            <button className="btn btn-outline-dark m-2" onClick={this.handleBooking}>Confirm </button>
                        </div>  
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    bookingId : state.bookingId,
    userId: state.userId
})

const mapDispatchToProps = dispatch => ({
    bookMeetingRoom : (payload) => dispatch(bookMeetingRoom(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookingPage)
