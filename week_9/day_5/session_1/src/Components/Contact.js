import React from 'react'


export default function Contact() {
    const handleChange = (e) => {
        e.target.name = e.target.value
    }
    return (
        <div>
            <div className="w-50 p-5">
                <label htmlFor="email">Email</label>
                <input type="text" onChange={handleChange} name="email" className="form-control" />
                <button className="btn btn-info btn-block my-2">Submit</button>
                <small className="text-muted my-1">Submit your email we will get back to you</small>
            </div>
        </div>
    )
}
