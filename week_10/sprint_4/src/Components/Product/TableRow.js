import React from 'react'

export default function TableRow(props) {
    return (
                <tr>
                    <td>{props.data.productName}</td>
                    <td>{props.data.productId}</td>
                    <td>{props.data.productDescription}</td>
                    <td>{props.data.category}</td>
                    <td>{props.data.material}</td>
                    <td>{props.data.price}</td>
                    <td><button className="btn btn-primary" onClick={props.addToCart.bind(this, props.data.key)}>Add to cart</button></td>
                </tr>
    )
}


