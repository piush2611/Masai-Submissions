import React, { Component } from 'react'
import Buttons from './Buttons'

export class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seconds: 59,
            min: 5,
            reset: false,
            start : true
        }
    }

    changeSec = () => {
        if (this.state.seconds === 1) {
            this.setState({
                seconds: 60,
                min: this.state.min - 1
            })
        } else {
            this.setState({
                seconds: this.state.seconds - 1
            })
        }

        if (this.state.min === 0 && this.state.seconds === 1) {
            alert("Time is up !!")
            this.onReset()
        }

    }

    start = () => {
        if(this.state.start){
            this.time =  setInterval(() => this.changeSec(), 1000)
            this.setState({
                start: false
            })
        } else {
            alert("Timer already started !!")
        }
        
    }

    stop = () => { 
        clearInterval(this.time) 
        this.setState({ start: true})

    }

    onReset = () => {
        this.setState({
            seconds: 59,
            min: 5
        })
        clearInterval(this.time)
    }

    // handling change in input
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    
    render() {
        if (this.state.reset) {
            return (
                <div className="container text-center">
                    <h1 className="text-dark display-3"> {this.state.seconds} s</h1>
                    <Buttons start={this.start} stop={this.stop} onReset={this.onReset} />
                </div>
            )
        }
        else {
            return (
                <div className="container text-center">
                    <h1 className="text-dark display-3">
                        <input  type="text" 
                                name="min"
                                value={this.state.min} 
                                onChange={this.handleChange} 
                                className="w-25" /> min :  
                        <input  type="text" 
                                name="seconds"
                                value={this.state.seconds} 
                                onChange={this.handleChange} 
                                className="w-25 ml-2" /> s</h1>
                    <Buttons start={this.start} stop={this.stop} onReset={this.onReset} />
                </div>
            )
        }
    }
}

export default Timer