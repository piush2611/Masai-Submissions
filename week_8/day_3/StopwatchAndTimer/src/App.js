import React from 'react';
import Stopwatch from './components/Stopwatch'
import Timer from './components/Timer'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      stopwatch : true
    }
  }
  
  stopwatch = () => {
    this.setState({
      stopwatch : true
    })
  }

  timer = () => {
    this.setState({
      stopwatch : false
    })
  }
  render() {
    if(this.state.stopwatch){
      return( 
        <div className="container my-5 text-center">
          <div className="row">
            <div className="col-6 display-4 " onClick={this.stopwatch}>Stopwatch</div>
            <div className="col-6 display-4" onClick={this.timer}>Timer</div>
          </div>
          <h1 className="text-center">Stopwatch</h1>
          <Stopwatch />
        </div>
       )
    }
    else {
      return( 
        <div className="container my-5 text-center">
          <div className="row">
            <div className="col-6 display-4" onClick={this.stopwatch}>Stopwatch</div>
            <div className="col-6 display-4" onClick={this.timer}>Timer</div>
          </div>
          <h1 className="text-center">Timer</h1>
          <Timer />
        </div>
      )
    }
  }
  
}

export default App;
