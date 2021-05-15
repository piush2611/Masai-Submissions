import React, { Component } from 'react'
import { connect } from 'react-redux'

export class NewRestaurantRequests extends Component {
    render() {
        return (
            <div>
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>Restaurant name</th>
                                <th>City</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Owner name</th>
                                <th>Owner contact no</th>
                                <th>Opening Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.newRestaurantsRequests.map(e =>
                                <tr key={e.id} >
                                      <th>{e.restaurantName}</th>
                                      <th>{e.city}</th>
                                      <th>{e.phone}</th>
                                      <th>{e.email}</th>
                                      <th>{e.ownerName}</th>
                                      <th>{e.ownerMobile}</th>
                                      <th>{e.openingStatus}</th>  
                                </tr>
                            )}
                        </tbody>
                    </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    newRestaurantsRequests: state.newRestaurantsRequests 
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NewRestaurantRequests)
