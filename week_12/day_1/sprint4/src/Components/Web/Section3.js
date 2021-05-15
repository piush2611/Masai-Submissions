import React from 'react'
import Column from './Column'

function Section3() {
    return (
        <div className="container">
            <div className="row">
                <Column info="Instead of a single overstuffed inbox, conversations in Slack happen in dedicated spaces called channels." title="Conversations, organised" />
                <Column info="Slack makes it simple to follow conversations or find important information in an easily searchable archive." title="Stay in the loop, not out" />
                <Column info="Unlike email, Slack lets you choose which conversations are most important – and which can wait." title="Give focus a chance" />
            </div>
        </div>
    )
}

export default Section3
