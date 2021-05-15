import React, { Component } from 'react'
import ButtonsForStopwatch from './ButtonsForStopwatch'

export class Stopwatch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seconds: 0,
            milliseconds: 0,
            minutes: 0,
            renderMin: false,
            start : true
        }
    }

    reset = () => {
        this.setState({
            seconds : 0,
            milliseconds : 0,
            minutes : 0,
            renderMin : false
        })
    }

    start = () => {
        if(this.state.start){
            this.time =  setInterval(() => this.changeTime(), 10)
            this.setState({
                start: false
            })
        }
        else {
            alert("Stopwatch already started")
        }
    }
    
    stop = () => {
        clearInterval(this.time)
        this.setState({ start: true})
    }

    changeTime = () => {
        if (this.state.milliseconds === 100) {
            this.setState({
                milliseconds: 0,
                seconds: this.state.seconds + 1
            })
        }
        else {
            this.setState({
                milliseconds: this.state.milliseconds + 1
            })
        }

        if (this.state.seconds === 60) {
            this.setState({
                minutes: this.state.minutes + 1,
                seconds: 1,
                renderMin: true
            })
        }
    }


    render() {
        if (this.state.renderMin) {
            return (
                <div className="container bg-light">
                    <p className="display-3 text-center text-dark"> {this.state.minutes} min : {this.state.seconds} s : {this.state.milliseconds} </p>
                    <ButtonsForStopwatch stop={this.stop} onReset={this.reset} start={this.start} />
                </div>
            )
        }
        else {
            return (
                <div className="container bg-light">
                    <p className="display-3 text-center text-dark">{this.state.seconds} s : {this.state.milliseconds} </p>
                    <ButtonsForStopwatch stop={this.stop} onReset={this.reset} start={this.start} />
                </div>
            )
        }
    }



}

export default Stopwatch
