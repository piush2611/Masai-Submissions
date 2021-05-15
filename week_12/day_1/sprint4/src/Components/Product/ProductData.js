import React from 'react'

function ProductData(props) {
    return (
        <tr>
            <td>{props.data.name}</td>
            <td>{props.data.id}</td>
            <td>{props.data.desc}</td>
            <td>{props.data.category}</td>
            <td>{props.data.price}</td>
            <td><button className="btn btn-success" onClick={() => props.addToCart(props.data.id, props.data.price)}><small>Add to cart</small></button></td>
        </tr>
    )
}

export default ProductData
