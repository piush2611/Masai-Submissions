import React from 'react'
import { Button } from '@material-ui/core'

export default function Pagination(props) {
    const arr = []
    for(let i=5; i<=props.length; i+=5){
        arr.push(i)
    }
    console.log(arr)
    return (
        <div>
            {arr.map(e => 
                <Button color="secondary" variant="contained" key={e} onClick={() => props.handleClick(e)}>{e/5}</Button>
            )} 
        </div>
    )
}
