import React from 'react'
import './buttons.css'
import B1 from './b1'
import B2 from './b2'
import B3 from './b3'
import B4 from './b4'
import B5 from './b5'
import B6 from './b6'
import B7 from './b7'
import B8 from './b8'

class Buttons extends React.Component{
    render() {
        return(
            <div>
                <div className="flex1">
                    <B1 />
                    <B2 />
                </div>
                <div className="flex1">
                    <B3 />
                    <B4 />
                </div>
                <div className="flex1">
                    <B5 />
                    <B6 />
                </div>
                <div className="flex1">
                    <B7 />
                    <B8 />
                </div>
            </div>
        )
    }
}

export default Buttons