import React from 'react'

function Buttons(props) {
    return (
        <div>
            <button className="btn btn-info m-2" onClick= {props.start}>Start</button>
            <button className="btn btn-info m-2" onClick= {props.stop}>Stop</button>
            <button className="btn btn-danger m-2" onClick={props.onReset}>Reset</button>
        </div>
    )
}

export default Buttons
