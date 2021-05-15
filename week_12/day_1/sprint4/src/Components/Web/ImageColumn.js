import React from 'react'

const ImageColumn = props => {
    return (
        <div className="col-12 col-md-6 col-lg-3">
            <div className="text-center">
            <img src={props.src} alt="logo" className="img-fluid" />
            </div>
        </div>
    )
}

export default ImageColumn