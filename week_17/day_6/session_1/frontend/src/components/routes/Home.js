import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='d-flex justify-content-center m-5'>
            <Link to='/login' className="text-decoration-none"><button className="btn btn-outline-danger"> Login</button></Link>
        </div>
    )
}
