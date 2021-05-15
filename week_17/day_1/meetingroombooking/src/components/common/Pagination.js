import React from 'react'

export default function Pagination({ len, func }) {

    const pageLinks = []
    for(let i=1; i<=len; i++){
        pageLinks.push(i*6)
    }
    return (
        <>
            { pageLinks.map(pageNum => 
                <button className="btn btn-sm btn-info m-1 mt-3" key={pageNum} onClick={() => func(pageNum/6) }>{pageNum/6}</button>
            )}
        </>
    )
}
