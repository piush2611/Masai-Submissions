import React from 'react'
import Column from './Column'

export default function About() {
    return (
        <div>
            <h1 className="text-dark text-center p-5">We pioneered the discount broking model in India <br/> Now, we are breaking ground with our technology. </h1>
            <hr className="text-muted pt-5"/>
            <div className="row p-5">
                <div className="col-12 col-md-6 p-2">
                    <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. </p>
                    <p> Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India in terms of active retail clients.</p>
                    <p>Over 1.5+ million clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes. </p>
                </div>
                <div className="col-12 col-md-6 p-2">
                    <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors. </p>
                    <p><span className="text-info">Rainmatter,</span> our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets. </p>
                    <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is <span className="text-info">saying about us.</span> </p>
                </div>
            </div>
            <div className="p-5">
                <h1 className="text-center text-dark py-4">People</h1>
                <div className="row text-center">
                    <div className="col-12 col-md-6">
                        <img src="https://zerodha.com/static/images/nithin-kamath.jpg" alt="" className="img-fluid w-50 rounded-circle pb-3"/>
                            <h4>Nitin Kamnath</h4>
                            <h5 className="py-2">Founder & CEO</h5>
                    </div>
                    <div className="col-12 col-md-6 text-left">
                        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry. </p>
                        <p className="py-2">He was named one of the “Top 10 Businessmen to Watch Out for in 2016 in India” by The Economic Times for pioneering and scaling discount broking in India. </p>
                        <p className="py-2">Playing basketball is his zen.</p>
                        <p className="py-2">Connect on <span className="text-info">TradingQnA ? Twitter</span></p>
                    </div>
                </div>
            </div>
            <div className="row">
                <Column src="https://zerodha.com/static/images/Austin.jpg" name="Austin Prakash" designation="Director-Strategy" />
                <Column src="https://zerodha.com/static/images/Nikhil.jpg" name="Nikhil Prakash" designation="Co-FOunder & CIo" />
                <Column src="https://zerodha.com/static/images/Kailash.jpg" name="Kailash Prakash" designation="CTO" />
            </div>
            <div className="row">
                <Column src="https://zerodha.com/static/images/Venu.jpg" name="Venu Madhav" designation="Chief of operations" />
                <Column src="https://zerodha.com/static/images/Seema.jpg" name="Seema Prakash" designation="Chief of client-relation" />
                <Column src="https://zerodha.com/static/images/Hanan.jpg" name="Hanan Delvi" designation="Chief of quality" />
            </div>
        </div>
    )
}
