import React from 'react'
import { Link } from 'react-router-dom'

export default function AllProducts(props) {
    let arr = [...props.productArr]
    props.match.params.orderBy === "asc" ? arr.sort((a,b) => a.price - b.price) : arr.sort((a,b) => b.price - a.price)   
    return (
        <>
            <div className="btn btn-dark  m-5">
                {props.match.params.orderBy === "desc" ? <Link to="/Products/asc">Order by ascending</Link> : <Link to="/Products/desc">Order by descending</Link>}
            </div>
            <div className="row p-5">
                {arr.map(e => {
                    return (
                        <div className="col-12 col-md-6 col-lg-3 mb-4 text-center" key={Math.random()}>
                            <img src={e.src} alt="productImage" className="img-thumbnail" />
                            <h5 className="">{e.name}</h5>
                            <p></p>
                            <div className="d-flex justify-content-around">
                                <div>Price : {e.price}</div>
                                <Link to={`/Products/${e.id}`} className="btn btn-outline-info btn-sm mx-1">See more</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
