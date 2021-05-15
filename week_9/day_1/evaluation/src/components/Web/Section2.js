import React, { Component } from 'react'

export class Section2 extends Component {
    render() {
        return (
            <div className="container p-5">
                <div className="row p-5 mb-5">
                    <div className="col-6">
                        <h2 className="font-weight-bolder">Our Commitment to your <br/> safety</h2>
                        <p>With every safety feature we add and every standard in our Community Guidelines we uphold, we’re committed to protecting you on the road ahead. Learn more about our Community Guidelines <a href="#" className="pb-1 text-dark ">here</a></p>
                        <a href="#" className="pb-1 text-dark">See all safety features</a>
                    </div>
                    <div className="col-6">
                        <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_496,h_331/v1558736931/assets/e5/fb1f43-f1bf-4dd2-b62d-6015c758d2ee/original/Safety_ilo.svg" className="img-fluid" alt=""/>
                    </div>
                </div>
                <div className="row p-5">
                    <div className="col-4">
                        <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1542256135/assets/dd/c53d7b-8921-4dc7-93f4-45fb59f4ffb9/original/person-multiple-outlined.svg" alt=""/>
                        <p className="my-2 font-weight-bolder">About us</p>
                        <p>Find out how we started, what drives us, and how we’re igniting opportunity.</p>
                        <p>Learn More</p>
                        <hr className="bg-dark w-25 float-left mt-n3" />
                    </div>
                    <div className="col-4">
                        <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1542254244/assets/eb/68c631-5041-4eeb-9114-80048a326782/original/document-outlined.svg" alt=""/>
                        <p className="my-2 font-weight-bolder">About us</p>
                        <p>Find out how we started, what drives us, and how we’re igniting opportunity.</p>
                        <p>Learn More</p>
                        <hr className="bg-dark w-25 float-left mt-n3" />
                    </div>
                    <div className="col-4">
                        <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1542255370/assets/64/58118a-0ece-4f80-93ee-8041b53593d5/original/home-outlined.svg" alt=""/>
                        <p className="my-2 font-weight-bolder">Global Citizenship</p>
                        <p>Read about our commitment to making a positive impact in the cities we serve.</p>
                        <p>Learn More</p>
                        <hr className="bg-dark w-25 float-left mt-n3" />
                    </div>
                </div>
                <div className="row p-5">
                    <div className="col-6 p-5">
                        <div className="d-flex justify-content-between">
                            <h1>Sign up to drive</h1>
                            <a href="" className="h1">></a>
                        </div>
                        <hr className="bg-dark"/>
                    </div>
                    <div className="col-6 p-5">
                        <div className="d-flex justify-content-between">
                            <h1>Sign up to ride</h1>
                            <a href="#" className="h1">></a>
                        </div>
                        <hr className="bg-dark"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section2
