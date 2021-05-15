import React from 'react'

export default function Table(props) {
    return (
        <tr className="row">
            <td className="col-6 col-md-4 col-lg-2">
                <img src={props.data.avatar_url} alt="" className="img-fluid rounded-circle border border-danger p-2" />
            </td>
            <td className="col-6 col-md-8 col-lg-10">
                <p>Username : {props.data.login}</p >
                <p>Profile link : {props.data.html_url}</p>
                <p>Score : {props.data.score}</p>
                <button className="btn btn-sm btn-outline-success" onClick={() => props.click(props.data.repos_url)}>Get repositories</button>
            </td>
        </tr>
    )
}
