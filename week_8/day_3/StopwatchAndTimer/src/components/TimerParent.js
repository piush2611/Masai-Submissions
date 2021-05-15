import React, { Component } from 'react'

export class TimerParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             sec : 10,
             min : 1
        }
    }

    changeTime = () => {
        this.setState({
            sec : this.state.sec-1
        })
    }

    start = () => {
      this.time =   setInterval(() => {
            this.changeTime()
        }, 1000)
    }

    stop = () => {
        clearInterval(this.time)
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.min} : {this.state.sec}</h1>
                <button className="btn btn-info" onClick={this.start}>Start</button>
                <button className="btn btn-info m-2" onClick={this.stop}>Stop</button>
            </div>
        )
    }
}

export default TimerParent
