import React from 'react'
import { Link } from 'react-router-dom'

export default function AllProducts(props) {
    console.log(props)
    return (
        <div className="row p-5">
            {props.productArr.map(e => {
                return (
                    <div className="col-12 col-md-6 col-lg-3 mb-4 text-center" key={Math.random()}>
                        <img src={e.src} alt="productImage" className="img-thumbnail" />
                        <h5 className="p-2">{e.name}</h5>
                        <div className="">
                            <Link to={`${props.match.url}/${e.id}`} className="btn btn-outline-info btn-sm">See more</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
