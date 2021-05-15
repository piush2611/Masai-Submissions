import React from 'react'

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand text-warning" href="">PVR</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse container" id="navbarSupportedContent">
                    <input type="text" placeholder="Search movies or theatres.." className="form-control w-75 bg-dark text-white" />
                    <select name="" className="form-control w-25 bg-dark text-white mx-2">
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bangalore">Bangalore</option>
                    </select>
                </div>
                <button className="btn btn-dark btn-lg text-warning">≡</button>
            </nav>
            <div className="container-fluid bg-dark">
                <div className="container">
                            <div className="text-white row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 font-weight-bolder d-flex justify-content-around">
                                        <p>IMAX</p>
                                        <p>4DX</p>
                                        <p>Play House</p>
                                        <p>GOLD</p>
                                        <p>P[XL]</p>
                                        <p>ONYX</p>
                                        <p>Director's cut</p>
                                        <p>D-Box</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 text-light d-flex justify-content-around">
                                        <p>Vkaao</p>
                                        <p>Magazine</p>
                                        <p>Cinemas</p>
                                        <p>Offers</p>
                                        <p>Advertise</p>
                                        <p>Gift Cards</p>
                                        <p>Bulk Bookings</p>
                                    </div>
                            </div>
                    </div>
            </div>
        </div>
            
    )
}

export default Navbar
