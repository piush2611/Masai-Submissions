import React from 'react'

export default function Cart({data, inc, dec, price}) {
    console.log(data)
    return (
        <div className="row p-5 m-3">

            <table className="table table-responsive col-12 col-md-6 mx-auto">
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
                            <td><button className="btn btn-outline-danger" onClick={() => dec(e.id)}>-</button> {e.count} <button className="btn btn-outline-success" onClick={() => inc(e.id)}>+</button></td>
                            <td>{e.price}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="col-12 col-md-6 text-dark text-center p-2">
                Total : {price}
            </div>
        </div>
         
    )
}



