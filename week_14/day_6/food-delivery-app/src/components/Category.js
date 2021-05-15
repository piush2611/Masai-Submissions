import React from 'react'

export default function Category(props) {
    return (
        <div className="col-12 col-md-4">
            <button className="btn btn-info btn-block mb-2" onClick={() => props.handleCategory(props.title)}>{props.title}</button>
        </div>
    )
}
