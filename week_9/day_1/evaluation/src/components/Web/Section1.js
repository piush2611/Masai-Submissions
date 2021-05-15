import React, { Component } from 'react'


export class Section1 extends Component {
    render() {
        return (
            <div className="container">
                <div className="card bg-dark text-white">
                    <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,g_north,w_1280,h_727/v1558483958/assets/3a/b709e3-54eb-4f13-8618-2bf08addf5dd/original/earn_2x.jpg" className="card-img w-100 h-100" alt="..." />
                    <div className="card-img-overlay m-5 text-dark">
                        <ul className="nav nav-tabs d-flex justify-content-around text-center bg-white p-2" id="myTab" role="tablist">
                            <li className="nav-item">
                                <img src="https://www.uber-assets.com/image/upload/v1558389718/assets/8e/33c8c0-f7e9-467c-924b-c70232943a47/original/Earn-filled.svg" alt=""/>
                                <a href="" className="nav-link text-dark" id="earn-tab">Earn</a>
                            </li>
                            <li className="nav-item">
                                <img src="https://www.uber-assets.com/image/upload/v1542252540/assets/6d/87af17-3970-4d01-8936-1b0ba102ea6e/original/car-front-outlined.svg" alt=""/>
                                <a className="nav-link text-dark" id="ride-tab" data-toggle="tab" href="#ride" role="tab" aria-controls="ride" aria-selected="false">Ride</a>
                            </li>
                            <li className="nav-item">
                                <img src="https://www.uber-assets.com/image/upload/v1542256606/assets/7d/5a4852-3b2a-4466-96de-602dfb62dc1b/original/restaurant-outlined.svg" alt=""/>
                                <a className="nav-link text-dark" id="eat-tab" data-toggle="tab" href="#eat" role="tab" aria-controls="eat" aria-selected="false">Eat</a>
                            </li>
                            <li className="nav-item">
                                <img src="https://www.uber-assets.com/image/upload/v1542257500/assets/14/aa5c19-33cc-4556-a8e3-8228253af608/original/truck-outlined.svg" alt=""/>
                                <a className="nav-link text-dark" id="freight-tab" data-toggle="tab" href="#freight" role="tab" aria-controls="freight" aria-selected="false">Freight</a>
                            </li>
                            <li className="nav-item">
                                <img src="https://www.uber-assets.com/image/upload/v1542252354/assets/e3/24ab47-806e-493b-9df8-748763238cc8/original/briefcase-outlined.svg" alt=""/>
                                <a className="nav-link text-dark" id="business-tab" data-toggle="tab" href="#business" role="tab" aria-controls="business" aria-selected="false">Business</a>
                            </li>
                            <li className="nav-item">
                                <img src="https://www.uber-assets.com/image/upload/v1542255414/assets/5e/37af00-8b0a-48a2-adb3-fe19406d2d74/original/job-busser-outlined.svg" alt=""/>
                                <a className="nav-link text-dark" id="work-tab" data-toggle="tab" href="#work" role="tab" aria-controls="work" aria-selected="false">Work</a>
                            </li>
                            <li className="nav-item">
                                <img src="https://www.uber-assets.com/image/upload/v1542252195/assets/69/e1d56d-4b83-4878-aab5-c37ea291e188/original/bike-outlined.svg" alt=""/>
                                <a className="nav-link text-dark" id="bike-tab" data-toggle="tab" href="#bike" role="tab" aria-controls="bike" aria-selected="false">Bike</a>
                            </li>
                            <li className="nav-item">
                                <img src="https://www.uber-assets.com/image/upload/v1573109528/assets/7b/1cae91-fbf4-4e3e-9537-006b4a0dc3bc/original/copter_outlined.svg" alt=""/>
                                <a className="nav-link text-dark" id="fly-tab" data-toggle="tab" href="#fly" role="tab" aria-controls="fly" aria-selected="false">Fly</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active mx-3" id="earn" role="tabpanel" aria-labelledby="earn-tab">
                                <div className="row">
                                    <div className="col-6 bg-white p-5 ">
                                        <div className="h1 font-weight-bold text-body">Get in the driver's <br/> seat and get <br/> paid</div>
                                        <p className="text-body">Drive on the largest network of active riders.</p>
                                        <button className="btn btn-dark rounded-0 px-4 py-3">Sign up to drive</button>
                                        <p className="text-body py-2 border-bottom border-dark">Learn more about driving and delivering</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade mx-3" id="ride" role="tabpanel" aria-labelledby="ride-tab">
                                <div className="row">
                                        <div className="col-6 bg-white p-5">
                                            <div className="h1 text-body">Request a ride <br/> now</div>
                                            <input type="text" name="" id="" placeholder="Enter a pickup location" className="p-4 form-control bg-light" />
                                            <input type="text" className="form-control p-4 my-2 bg-light" placeholder="Enter Destination" />
                                            <button className="btn btn-dark rounded-0 px-5 py-4 ">Request Now</button>
                                            <button className="btn btn-light rounded-0 px-5 py-4">Save for later</button>
                                        </div>
                                        <div className="col-6 ml-n4">
                                            <img src="https://www.uber-assets.com/image/upload/q_auto/f_auto/v1559178096/navigation/a08da9d0d7182edc16c3cce5f46d6854.png" alt="" className="img-fluid h-100" />
                                        </div>
                                </div>
                            </div>
                            <div className="tab-pane fade mx-3" id="eat" role="tabpanel" aria-labelledby="eat-tab">
                                <div className="row">
                                    <div className="col-6 bg-white p-5">
                                        <div className="h1 text-body">Delicious eats, <br/> delivered easy</div>
                                        <p className="text-body">The restaurants you love, delivered to your door.</p>
                                        <button className="btn btn-dark rounded-0 px-4 py-3">Order now</button>
                                        <p className="text-body py-2 border-bottom border-dark"> Own a restaurant? Partner with Uber Eats</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade mx-3" id="freight" role="tabpanel" aria-labelledby="freight-tab">
                                <div className="row">
                                    <div className="col-6 bg-white p-5">
                                        <div className="h1 text-body">A new direction <br/> for freight</div>
                                        <p className="text-body">Greater transparency for shippers and carriers to do business together.</p>
                                        <button className="btn btn-dark rounded-0 px-4 py-3">Get Shipper Details</button>
                                        <p className="text-body py-2 border-bottom border-dark">Sign up to be a carrier</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade mx-3" id="business" role="tabpanel" aria-labelledby="business-tab">
                            <div className="row">
                                    <div className="col-6 bg-white p-5">
                                        <div className="h1 text-body">Move Your teams <br/> and employees</div>
                                        <p className="text-body">Uber for Business helps to simplify business travel, expensing, and customer experiences</p>
                                        <button className="btn btn-dark rounded-0 px-4 py-3">Learn more</button>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade mx-3" id="work" role="tabpanel" aria-labelledby="work-tab">
                                <div className="row">
                                    <div className="col-6 bg-white p-5">
                                        <div className="h1 text-body">Put your skills <br/> to work</div>
                                        <p className="text-body">Download the new Uber Works app and make money as a prep cook, customer service associate, and more.</p>
                                        <button className="btn btn-dark rounded-0 px-4 py-3">Find Work</button>
                                        <p className="text-body py-2 border-bottom border-dark">Find Workers</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade mx-3" id="bike" role="tabpanel" aria-labelledby="bike-tab">
                                <div className="row">
                                    <div className="col-6 bg-white p-5">
                                        <div className="h1 text-body">Bike or Scoot <br/>there, with JUMP</div>
                                        <p className="text-body">Go farther and have more fun with electric bikes and scooters</p>
                                        <button className="btn btn-dark rounded-0 px-4 py-3">Get a ride</button>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade mx-3" id="fly" role="tabpanel" aria-labelledby="fly-tab">
                                <div className="row">
                                    <div className="col-6 bg-white p-5">
                                        <div className="h1 text-body">Ride sharing<br/> at new heights</div>
                                        <p className="text-body">Building the future of transportation with urban aerial ridesharing.</p>
                                        <button className="btn btn-dark rounded-0 px-4 py-3">Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-dark text-white">
                    <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1280/v1556927537/assets/e4/ade93c-0b7b-4990-bda4-afef96793277/original/Modalities_banner_home.jpg" className="card-img" alt="..."/>
                    <div className="card-img-overlay p-5 border-white">
                        <div className="card-title p-2 text-dark display-4">Setting 700+  <br/> cities in motion</div>
                        <a href="" className="pb-2 border-bottom border-dark p-2 text-dark">View all cities</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section1
