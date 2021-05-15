import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Typography, Button } from '@material-ui/core';

export class Dashboard extends Component {

    handleClick = () => {
        this.props.login ? this.props.history.push({ pathname: "/addNew" }) : this.props.history.push({ pathname: "/login" })
    }

    handleClick2 = () => {
        this.props.login ? this.props.history.push({ pathname: "/viewAll" }) : this.props.history.push({ pathname: "/login" })
    }
    render() {
        return (
            <div className="container text-center p-5">
                <Typography variant="h2">Dashboard</Typography>
                <br />
                <Button onClick={this.handleClick} color="secondary" variant="outlined" size="large" >Add new vehicle</Button>
                <br />
                <br />
                <Button onClick={this.handleClick2} color="secondary" variant="outlined" size="large" >View all vehicle</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    login: state.login
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
