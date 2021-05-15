import React from 'react'

export default function SignUp() {
    return (
        <div className="text-center p-5">
            <h1>Join 1.5+ million investors & traders</h1>
            <h6>Open a trading and Demat account online and start investing for free </h6>
            <div className="row p-3">
                <div className="col-12 col-md-6">
                    <img src="https://zerodha.com/static/images/account_open.png" alt="" className="img-fluid"/>
                </div>
                <div className="col-12 col-md-6 text-left p-5">
                    <h3>Sign up now</h3>
                    <p className="text-muted">Or continue with your existing application</p>
                    <div className="input-group mb-2 mr-sm-2">
                        <div className="input-group-prepend">
                        <div className="input-group-text">+91</div>
                        </div>
                        <input type="text" className="form-control w-25" id="inlineFormInputGroupUsername2" placeholder="Your 10 digit mobile number" />
                    </div>
                    <small className="text-muted">You will receive an OTP on your number</small>
                    <br/>
                    <button className="btn btn-info">Continue</button>
                </div>
            </div>
        </div>
    )
}