import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import {Container, Button, Typography } from '@material-ui/core';
import Styles from './Styles.module.css'

export class LandingPage extends Component {
    render() {
        if(this.props.login){
            return (
                <div className={Styles.center}>
                    <Container maxWidth="sm" >
                        <Typography variant="h3">Dashboard</Typography>
                        <Link to="/addNewTopic"><Button color="secondary" variant="contained">Add new topic</Button></Link>
                        <br/>
                        <br/>
                        <Link to="/viewAll"><Button color="secondary" variant="contained" >View all topics</Button></Link>
                    </Container>
                </div>
            )
        }
        else {
            return <Redirect to="/login" />
        }
    }
}

const mapStateToProps = (state) => ({
    login: state.login
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
