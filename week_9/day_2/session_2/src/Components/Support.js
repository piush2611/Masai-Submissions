import React from 'react'

export default function Support() {
    return (
        <div class="p-3 bg-info text-white">
            <div className="d-flex justify-content-between">
                <h5>Support portal</h5>
                <p classname="border border-bottom">Login with KITE</p>
            </div>
            <div className="text-center p-5">
                <h5>Search for an answer or browse help topics to create a ticket</h5>
                <input type="text" placeholder="E.g. how do I activate F&D" className="form-control" />
            </div>
        </div>
        
    )
}