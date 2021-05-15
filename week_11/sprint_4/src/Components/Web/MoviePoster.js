import React, { Component } from 'react'

export class MoviePoster extends Component {
    render() {
        return (
            <div className="col-3">
                <img src={this.props.data} alt="" className="img-fluid"/>
            </div>
        )
    }
}

export default MoviePoster
