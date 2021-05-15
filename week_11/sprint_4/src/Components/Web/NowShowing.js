import React, { Component } from 'react'
import MoviePoster from './MoviePoster'

export class NowShowing extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data : ["https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00010731.jpg", "https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00015430.jpg", "https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00015430.jpg", "https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00015426.jpg"]
        }
    }
    
    render() {
        return (
            <div className="container-fluid bg-dark py-3">
            <div className="container p-2">
                <div className="row bg-dark rounded p-5 mx-5">
                    <div className="col-8 text-white">
                        <h2>Introducing an exclusive loyalty program that pays you back!</h2>
                        <div className="d-flex">
                            <button className="btn btn-light p-2 m-2">KNOW MORE</button>
                            <button className="btn btn-dark p-2 m-2">Already a member?</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <img src="https://www.pvrcinemas.com/assets/images/companies/herologo-pvr.png" alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
            <div className="container text-white">
                <div className="d-flex justify-content-between">
                    <h4>Now Showing</h4>
                    <div className="d-flex justify-content-around">
                        <h5 className="mx-2">Genre </h5>
                        <h5 className="mx-2">Format </h5>
                        <h5 className="mx-2">Language </h5>
                    </div>
                </div>
            </div>
            <div className="container">
            <div className="row">
                {this.state.data.map(e => <MoviePoster key={Math.random()} data={e} />)}
            </div>
            <div className="row my-3">
                {this.state.data.map(e => <MoviePoster key={Math.random()} data={e} />)}
            </div>
            <div className="text-center text-white">View All</div>
            </div>

            <div className="container">
                <h5 className="my-2">COMING SOON</h5>
                <div className="row">
                    {this.state.data.map(e => <MoviePoster key={Math.random()} data={e} />)}
                </div>
                <div className="row my-3">
                    {this.state.data.map(e => <MoviePoster key={Math.random()} data={e} />)}
                </div>
            </div>
        </div>
        )
    }
}

export default NowShowing
