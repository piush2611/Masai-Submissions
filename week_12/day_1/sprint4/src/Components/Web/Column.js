import React from 'react'

const Column = props => {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <img src="" />
            <div className="font-weight-bolder">{props.title}</div>
            <div>{props.info}</div>
        </div>
    )
}

export default Column