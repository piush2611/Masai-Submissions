import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div className="bg-light  mt-5 container">
                <div className="row p-5">
                    <div className="col-12 col-md-6 col-lg-3">
                        <p className="font-weight-bold py-3">Shop</p>
                        {['iPad', 'iPhone', "Watch", "Business"].map(e => <><small className="text-muted">{e}</small><br/></>)}
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <p className="font-weight-bold py-3">Support</p>
                        {["About us", "Help", "Shipping & Returns", "Proper Business", "Wholesale"].map(e =><> <small key={e} className="text-muted">{e}</small> <br/> </>)}
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <p className="font-weight-bold py-3">About studio proper</p>
                        <small className="text-muted">Studio Proper is a Melbourne based product design studio dedicated to simplifying everyday experiences with technology.</small>
                        <div className="">
                            <i className="fa fa-facebook-official m-2" aria-hidden="true"></i>
                            <i className="fa fa-instagram m-2" aria-hidden="true"></i>
                            <i className="fa fa-envelope m-2" aria-hidden="true"></i>
                            <i className="fa fa-linkedin m-2" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <p className="font-weight-bold py-3">Let us send you emails ? </p>
                        <p className="text-muted my-1">Don't worry, we hate spam too. Just the best stuff from us.</p>
                        <input type="text" placeholder="Enter your email address" className="form-control" />
                        <button className="btn btn-info btn-block mt-2">Subscribe</button>
                    </div>
                </div>
            </div>
        </>
    )
}
