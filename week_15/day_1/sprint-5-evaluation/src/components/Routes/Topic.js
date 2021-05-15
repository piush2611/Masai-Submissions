import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addComment } from '../Redux/Action'
import Styles from './Styles.module.css'
import {Container, Button, Typography,TextField } from '@material-ui/core';
import { typography } from '@material-ui/system'

export class Topic extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             comment:""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    

    handleClick = (id) => {
        let a = {
            id: id,
            comment: this.state.comment
        }
        this.props.addComment(a)
    }

    render() {
        let id = Number(this.props.match.params.id)
        const d = this.props.data.filter(e => e.id == id)
        return (
            <Container className={Styles.padding}>
                <Link to="/viewAll"><Button color='secondary' variant="contained">Go back</Button></Link>
                {d.map(e => 
                    <div key={e.id}>

                        <Typography variant="h6">{e.body}</Typography>
                        <h2>Comments :</h2> 
                        {e.comments.map(e => <div key={e}>{e}</div>)}
                    </div>
                )}
                <TextField required 
                            id="standard-required" 
                            label="Comment" 
                            name="comment" 
                            value={this.state.comment} 
                            onChange={this.handleChange} />
                <br/>
                <br/>
                <Button color="primary" variant="contained" onClick={() => this.handleClick(id)}> Add comment</Button>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
  data: state.data  
})

const mapDispatchToProps = dispatch=> ({
    addComment: (payload) => dispatch(addComment(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Topic)
