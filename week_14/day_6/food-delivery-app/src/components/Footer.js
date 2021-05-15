import React from 'react'
import Column from './Column'

export default function Footer() {
    return (
        <div>
            <div className="container p-5 bg-light">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        {["About us", "Culture", "Blog", "Careers", "Contact"].map(e => <Column key={e} title={e} />)}
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        {["Code of Conduct", "Community", "Verified Users", "Bloggers Help", "Developers", "Mobile Apps"].map(e => <Column key={e} title={e}/>)}
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        {["Advertise", "Order", "Book", "Trace", "Hypercure", "Business Blog", "Business App"].map(e => <Column key={e} title={e} />)}
                    </div>
                    <div className="col-12 col-md-6 col-lg-3"></div>
                </div>
            </div>
        </div>
    )
}
