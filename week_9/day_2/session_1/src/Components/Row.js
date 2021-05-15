import React from 'react'

export default function Row(props) {
    return (
        <tr>
            <td>{props.data.id}</td>
            <td>{props.data.name}</td>
            <td>{props.data.full_name}</td>
            <td>{props.data.html_url}</td>
        </tr>
    )
}
