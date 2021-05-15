import React from 'react'
import {  Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
        <div className="bg-light fixed-bottom"> 
            <div className="container p-2">
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <Link to="/About" className="m-2">About</Link>
                        <Link to="/Faq" className="m-2">FAQ</Link>
                        <p className="m-2">Copyright 1901</p>
                    </div>
                    <div className="">
                        <i className="fa fa-facebook-official m-2" aria-hidden="true"></i>
                        <i className="fa fa-instagram m-2" aria-hidden="true"></i>
                        <i className="fa fa-envelope m-2" aria-hidden="true"></i>
                        <i className="fa fa-linkedin m-2" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
