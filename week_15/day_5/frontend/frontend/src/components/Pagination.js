import React from 'react'

export default function Pagination(props) {
    let arr = []
    for(let i=1; i <= Number(props.len); i++){
        arr.push(i*Number(props.perPage))
    }
    return (
        <div>
            {arr.map(e => <button className="btn btn-sm btn-info m-1" key={e} onClick={() => props.handleClick(Number(e)/Number(props.perPage))}>{Number(e)/Number(props.perPage)}</button>)}
        </div>
    )
}
