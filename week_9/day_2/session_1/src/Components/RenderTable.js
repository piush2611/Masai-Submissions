import React from 'react'
import Table from './Table'

export default function RenderTable(props) {
    return (
        <table className="table m-3 p-5">
            <tbody>
                {props.data.map(e => <Table data={e} key={Math.random()} click={props.click} />)}
            </tbody>
        </table>
    )
}
