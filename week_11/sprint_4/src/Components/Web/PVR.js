import React, { Component } from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'
import NowShowing from './NowShowing'
import Trailer from './Trailer'

export class PVR extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Navbar />
                <Carousel />
                <NowShowing />
                <Trailer />
            </div>
        )
    }
}

export default PVR
