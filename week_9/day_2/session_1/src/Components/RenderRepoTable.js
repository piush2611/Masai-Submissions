import React from 'react'
import Row from './Row'

export default function RenderRepoTable(props) {
    return (
        <div className="table-responsive m-4 p-5">
            <table className="table">
                <tbody>
                    <tr>
                        <td>Id</td>
                        <td>Repository name</td>
                        <td>Repo full-name</td>
                        <td>Repo url</td>
                    </tr>
                    {props.data.map(e => <Row key={Math.random()} data={e} />)}
                </tbody>
            </table>
        </div>
    )
}
