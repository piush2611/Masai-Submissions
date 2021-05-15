import React from 'react'
import {  Link } from 'react-router-dom'
export default function Cart({data, inc, dec, price}) {
    return (
        <div className="row p-5 m-3">
            <table className="table table-responsive col-12 col-md-8 mx-auto">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                {data.map(e => 
                        <tr key={e.id}>
                            <td>{e.name}</td>
                            <td><button className="btn btn-outline-danger" onClick={() => dec(e.id, e.price)}>-</button> {e.count} <button className="btn btn-outline-success" onClick={() => inc(e.id,e.price)}>+</button></td>
                            <td>{e.price}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="col-12 col-md-4 text-dark text-center p-2">
                Total : {price}
                { price > 0 ? <button className="mx-3 btn my-2 btn-success"><Link to="/shoppingDone" className="text-white">Buy Now</Link></button> : null }
            </div>            
        </div>
    )
}



