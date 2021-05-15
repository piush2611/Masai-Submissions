import React from 'react'

function CartRow(props) {
    return (
        <tr>
            <td>{props.data.productName}</td>
            <td>{props.data.Price}</td>
        </tr>
    )
}

export default CartRow
