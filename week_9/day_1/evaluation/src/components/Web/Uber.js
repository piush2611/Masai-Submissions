import React, { Component } from 'react'
import Navbar from './Navbar'
import Section1 from "./Section1"
import Section2 from './Section2'
import Footer from './/Footer'

export class Uber extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Section1 />
                <Section2 />
                <Footer />
            </div>
        )
    }
}

export default Uber
