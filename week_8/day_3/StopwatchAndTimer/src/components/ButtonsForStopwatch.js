import React from 'react'

function ButtonsForStopwatch(props) {
    return (
        <div className="text-center">
            <button className="btn btn-info m-2" onClick={props.start}>Start</button>
            <button className="btn btn-info m-2" onClick={props.stop}>Stop</button>
            <button className="btn btn-danger m-2" onClick={props.onReset}>Reset</button>
        </div>
    )
}

export default ButtonsForStopwatch
