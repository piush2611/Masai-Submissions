import React from 'react'
import Card from './Card'

const Section7 = () => {
    return(
        <div className="container py-4">
            <h1 className="text-center font-weight-bolder">What’s new at Slack</h1>
            <div className="row">
                <Card src="https://a.slack-edge.com/b4782/marketing/img/promos/2019-10-10-engagement.jpg" text="READ STORY ->" />
                <Card src="https://a.slack-edge.com/ebeb3/marketing/img/promos/shared-channels-hp-promo.png" text="READ STORY ->" />
                <Card src="https://a.slack-edge.com/80588/marketing/img/promos/gsuite-calendar-email-files.png" text="READ MORE ->" />
            </div>
        </div>
    )
}

export default Section7