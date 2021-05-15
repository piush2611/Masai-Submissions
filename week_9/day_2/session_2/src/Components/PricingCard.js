import React from 'react'

export default function PricingCard(props) {
    return (
        <div className='col-12 col-md-6 col-lg-4 '>
            <img src={props.src} alt="" className="img-fluid w-"/>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
        </div>
    )
}
