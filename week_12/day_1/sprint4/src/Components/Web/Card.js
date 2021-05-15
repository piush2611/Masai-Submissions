import React from 'react'

const Card = (props) => {
    return(
        <div className="col-12 col-md-6 col-lg-4 p-3">
            <img src={props.src} alt="image" className="img-fluid" />
            <p className="my-2">Blog</p>
            <h6 className="font-weight-bolder">Not all Daily Active Users are created equal: Work is fueled by true engagement</h6>
            <h6 className="text-info ">{props.text}</h6>
        </div>
    )
}

export default Card