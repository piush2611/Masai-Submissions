import React from 'react'

function Cart(props) {
    return (
        <div className="d-flex justify-content-between">
            <div>{props.data.name}</div>
            <div>{props.data.price}</div>
        </div>
    )
}

export default Cart
