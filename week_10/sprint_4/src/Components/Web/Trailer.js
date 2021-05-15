import React from 'react'

function Trailer() {
    return (
        <div className="container-fluid bg-dark py-5">
            <div className="container">
            <h4 className="text-white my-2">Trailer & Videos</h4>
            <div className="row">
                <div className="col-4">
                    <div className="row">
                        <img src="https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00010731.jpg" alt="" className="img-fluid w-50" />
                        <img src="https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00010731.jpg" alt="" className="img-fluid w-50" />
                        <img src="https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00010731.jpg" alt="" className="img-fluid w-50"/>
                    </div>
                </div>
                <div className="col-8 h-100">
                    <img src="https://originserver-static1-uat.pvrcinemas.com/newweb/movies/big/1460x600/HO00010731.jpg" alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Trailer
