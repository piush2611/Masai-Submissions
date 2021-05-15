import React from 'react'

const Info = props => {
    return(
        <div className='text-muted'>
            {props.data.map(e => <p key={Math.random(1,100)*10}>{e}</p>)}
        </div>
    )
}

export default Info