import React from 'react'

export default function OrderPlaced(props) {
    const handleClick = () => {
        props.history.push("/")
    }
    return (
        <div className="container p-5 text-center">
            <button className="btn btn-warning mb-3" onClick={handleClick}>Go to homepage</button>
            <div className="display-2 text-dark">Thank you for <br/> shopping with us</div>
        </div>
    )
}
