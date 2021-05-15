import React from 'react'

export default function CreateOptions(props) {
    let arr = []
    for (let i = 5; i <= Number(props.len); i++) {
        arr.push(i)
    }
    return (
        <>
            {arr.map(e =>
                <option key={e} value={e}>{e}</option>
            )}
        </>
    )
}
