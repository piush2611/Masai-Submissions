import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Total extends Component {
    render() {
        return (
            <div className="my-2 text-dark h6">
                Tasks to be completed 
                <div className="p-2">{this.props.count}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    count: state.countOfNonCompletedTasks
})


export default connect(mapStateToProps, null)(Total)
