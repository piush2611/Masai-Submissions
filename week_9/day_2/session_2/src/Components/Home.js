import React from 'react'

export default function Home() {
    return (
        <>
            <div className="p-5 text-center">
                <img src="https://zerodha.com/static/images/landing.png" alt="landingImage" className="img-fluid w-50" />
                <h1 className="text-dark my-3">Invest in everything</h1>
                <h6>Online platform to invest in stocks, derivatives, mutual funds, and more </h6>
                <button className="btn btn-primary">Sign up now</button>
            </div>
            <div className="row my-5 py-5">
                <div className="col-12 col-md-6">
                    <img src="https://zerodha.com/static/images/largest-broker.svg" alt="" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6 my-3">
                    <h3>Largest stock broker in India</h3>
                    <p>1.5+ million Zerodha clients contribute to over 15% of all retail order <br /> volumes in India daily by trading and investing in: </p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center my-4 py-5">
                <h1>The Zerodha Universe</h1>
                <h4>A whole ecosystem of modern investment app tailored to specific needs, built from the ground up</h4>
                <img src="https://zerodha.com/static/images/ecosystem.png" alt="" className="img-fluid" />
                <p className="text-primary my-2">Explore more products</p>
            </div>
            <div className="row my-4 py-5">
                <div className="col-12 col-md-6 p-3">
                    <h1 className="my-2">Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <p className="my-2">See pricing -></p>
                </div>
                <div className="col-12 col-md-6 p-5">
                    <div className="row">
                    <div className="border border-dark text-center col-6">
                        <h1>₹0</h1>
                        <p>Free equity delivery and direct mutual funds</p>
                    </div>
                    <div className=" border border-dark text-center col-6">
                        <h1>₹20</h1>
                        <p>Intraday and F&O</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row my-4 py-5">
                <div className="col-12 col-md-6">
                    <img src="https://zerodha.com/static/images/index-education.svg" alt="" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6">
                    <h4 className="text-dark my-2">Free and open market education</h4>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <p className="text-primary my-1">Varsity -></p>
                    <p className="my-2">TradingQ&A, the most active trading and investment community in India for all your market related queries. </p>
                    <p className="text-primary my-1">TradingQ&A </p>
                </div>
            </div>
        </>
    )
}
