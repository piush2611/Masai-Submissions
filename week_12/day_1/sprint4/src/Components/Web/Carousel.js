import React from 'react'

const Carousel = props => {
    return (
        <div className="carousel-item active">
            <div className="row mx-5">
                <div className="col-12 col-lg-5">
                    <img src={props.data.img} className="img-fluid" />
                </div>
                <div className="col-12 col-lg-7">
                    <img src={props.data.logo} className="img-fluid p-3" />
                    <p>“Our teams tell us they’re working together and solving problems much faster, because although they are spread across the globe, Slack makes it like you’re in the same room.”</p>
                    <p className="font-weight-bolder">Pam Whitmore</p>
                    <p>Group Manager, IT, Intuit</p>
                </div>
            </div>
        </div>
    )
}
export default Carousel