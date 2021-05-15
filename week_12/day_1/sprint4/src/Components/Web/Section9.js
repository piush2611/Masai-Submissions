import React from 'react'
import Info from './Info'

const Section9 = () => {
    const data = [["Why slack?", "Enterprise", "Security", "Customer stories", "Pricing"],["Engineering","Financial services","Sales","IT","Marketing","Customer support","Human resources","Project management","Media"],["Slack Tips","Blog","Slack Certified programme","Help Centre","API","App Directory","Download Slack","Partners"],["About us","Leadership","News","Media kit","Careers"]]
    return(
        <div className="container py-5">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="font-weight-bolder">PRODUCT</div>
                    <Info data={data[0]} />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                <div className="font-weight-bolder">SLACK FRO TEAMS</div>
                    <Info data={data[1]} />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                <div className="font-weight-bolder">RESOURCES</div>
                    <Info data={data[2]} />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                <div className="font-weight-bolder">COMPANY</div>
                    <Info data={data[3]} />
                </div>
            </div>
        </div>
    )
} 

export default Section9