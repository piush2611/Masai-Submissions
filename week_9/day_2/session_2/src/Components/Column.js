import React from 'react'

export default function Column(props) {
    return (
        <div className="col-12 col-md-6 col-lg-4 text-center">
            <img src={props.src} alt="" className="img-fluid w-5 p-5 rounded-circle pb-3" />
            <h4>{props.name}</h4>
            <h5>{props.designation}</h5>
        </div>
    )
}
