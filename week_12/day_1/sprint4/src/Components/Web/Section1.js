import React from 'react'
import './Style.css'

export default function Section1() {
    return (
        <div id="bgImg">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-6 p-5">
                        <div className="display-4 d-none d-lg-block d-xl-none d-none d-xl-block ">
                            Slack replaces email <br/> inside your company
                        </div>
                        <h1 className="p-5 d-none d-sm-block d-md-none d-block d-sm-none font-weight-bolder">Slack replaces <br/> email inside <br/> your company</h1>
                        <div className="text-dark">Keep conversations organised in Slack, the smart alternative to email.</div>
                        <div className="row">
                            <button className=" col-12 col-lg-6 btn purpleButton text-white font-weight-bolder px-5 py-2 mx-4 my-2">Try Slack</button>
                            <button className=" col-12 col-lg-6 btn btn-outline-info font-weight-bolder px-5 py-2 mx-4 my-2">See the demo</button>
                        </div>
                        <small className="font-weight-bolder">Already using slack?<a href="" className="text-info">Sign in</a></small>
                    </div>
                </div>
            </div>
        </div>
    )
}
