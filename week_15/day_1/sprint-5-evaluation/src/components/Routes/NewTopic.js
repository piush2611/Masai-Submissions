import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNew } from '../Redux/Action'
import Styles from './Styles.module.css'
import {Container, Button, TextField, Typography,InputLabel, FormControl, MenuItem,Select  } from '@material-ui/core';

export class NewTopic extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:"",
             body:"",
             category:"..",
             username:""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        let newData = { 
            title:this.state.title,
             body:this.state.body,
             category:this.state.category,
             username:this.state.username,
             id:Math.random(1,1000)*10,
             comments:["Lorem, ipsum dolor."], 
             date:Date.now()
        }
        this.props.addNew(newData)
        alert("Topic added !")
    }
    
    render() {
        return (
            <div className={Styles.center}>
                <Container maxWidth="sm">

                <Typography variant="h4">Add New</Typography>
                <TextField  required 
                            id="standard-required" 
                            label="Title"  
                            name="title" 
                            value={this.state.title} 
                            onChange={this.handleChange} />
                <br/>
                <TextField  required 
                            id="standard-required" 
                            label="Body"
                            name="body" 
                            value={this.state.body} 
                            onChange={this.handleChange} />
                <br/>
                <br />
                 <FormControl>
                     <InputLabel>Category</InputLabel>
                    <Select value={this.state.category} 
                            name="category" 
                            onChange={this.handleChange} 
                            displayEmpty
                            className={Styles.w100} >
                        <MenuItem value="" disabled>Category</MenuItem>
                        <MenuItem value={"random"}>Random</MenuItem>
                        <MenuItem value={"general"}>General</MenuItem>
                        <MenuItem value={"programming"}>Programming</MenuItem>
                        <MenuItem value={"algorithm"}>Algorithm</MenuItem>
                        <MenuItem value={"suggestions"}>Suggestions</MenuItem>
                    </Select>
                </FormControl>
                <br/>
                <TextField  required 
                            id="standard-required" 
                            label="username"  
                            name="username" 
                            value={this.state.username} 
                            onChange={this.handleChange} />
                <br />
                <br/>
                <Button color="secondary" variant="contained" onClick={this.handleClick}>Submit</Button>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => ({
    addNew: (payload) => dispatch(addNew(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTopic)
