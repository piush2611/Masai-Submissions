import React from 'react'
import { Button } from '@material-ui/core'

export default function Pagination({length, func}) {

    let arr = []

    for(let i=1; i<=length; i++){
        arr.push(i*5)
    }
    return (
        <>
            {arr.map(e => 
                <Button onClick={() => func(e)} color="primary" variant="outlined" >{e}</Button>
            )}
        </>
    )
}
