import React, { Component } from 'react'

export class NotFound extends Component {
    componentDidMount(){
        this.props.flag()
    }
    render() {
        return (
            <div className="p-5 text-center">
                <h1>404 Looks like you are lost</h1>
            </div>
        )
    }
}

export default NotFound