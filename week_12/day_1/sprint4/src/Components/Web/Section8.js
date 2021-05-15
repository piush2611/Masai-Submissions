import React from 'react'
import './Style.css'

const Section8 = () => {
    return (
        <div className="container-fluid" id="bgPurple">
            <div className="container p-5">
                <h1 className="p-5 font-weight-bolder text-white text-center">Choose a better way to work</h1>
                <div className="row mx-5 justify-content-around">
                    <button className="btn btn-light px-5 py-3 col-12 col-md-5 mb-3">Try Slack</button>
                    <button className="btn btn-outline-light px-5 py-3 col-12 col-md-5">Contact</button>
                </div>
            </div>
        </div>
    )
}

export default Section8