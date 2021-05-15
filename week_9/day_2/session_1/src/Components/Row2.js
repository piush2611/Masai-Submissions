import React from 'react'

export default function Row2(props) {
    return (
        <tr>
            <td>{props.data.owner.login}</td>
            <td>{props.data.description}</td>
            <td>{props.data.url}</td>
        </tr>
    )
}
