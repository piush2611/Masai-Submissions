import React, { Component } from 'react'
import { Paper, Typography, TextField, Button, List, ListItemText, ListItem, IconButton, ListItemSecondaryAction } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import Styles from './Styles.module.css'

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item: "",
            data: [
                {
                    id: 1,
                    title: "First to-do",
                    isCompleted: false
                },
                {
                    id: 2,
                    title: "Second to-do",
                    isCompleted: false
                },
                {
                    id: 3,
                    title: "Third to-do",
                    isCompleted: false
                }
            ],
            completedData: [],
            showCompleted: false,
            data2: [
                {
                    id: 1,
                    title: "First to-do",
                    isCompleted: false
                },
                {
                    id: 2,
                    title: "Second to-do",
                    isCompleted: false
                },
                {
                    id: 3,
                    title: "Third to-do",
                    isCompleted: false
                }
            ]
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        const newItem = {
            id: Math.random(1, 100),
            title: this.state.item,
            isCompleted: false
        }

        this.setState({
            data: [...this.state.data, newItem],
            data2: [...this.state.data2, newItem],
            item: ""
        })
    }

    handleChange = (e) => {
        this.setState({ item: e.target.value })
    }

    handleDelete = id => {
        this.setState({
            data2: this.state.data2.filter(e => e.id !== id)
        })
    }

    completed = (id) => {
        this.setState({
            data: this.state.data.map(e => {
                if (e.id === id) {
                    e.isCompleted = !(e.isCompleted)
                }
                return e
            }),
            completedData: this.state.data.filter(e => e.isCompleted !== false),
            data2: this.state.data2.filter(e => e.id !== id)
        })
    }

    showCompleted = () => {
        this.setState({
            showCompleted: !this.state.showCompleted
        })
    }


    render() {
        return (
                <Paper className={Styles.paper}>
                    <Typography variant="h4"  >To-Do-App</Typography>
                    <form onSubmit={this.handleSubmit} className={Styles.dFlex} >
                        <TextField value={this.state.item} onChange={this.handleChange} placeholder="Add new to-do" />
                        <br />
                        <Button type="submit" color="primary" variant="contained">Add</Button>
                    </form>
                    <Typography align="center" className={Styles.note}>Note : Click on to-do to mark it as completed</Typography>
                    <List>
                        {this.state.data2.map(e =>
                            <ListItem key={e.id}>
                                <ListItemText primary={e.title}
                                    onClick={() => this.completed(e.id)} />
                                <ListItemSecondaryAction>
                                    <IconButton color="primary" onClick={() => this.handleDelete(e.id)}> <Delete /></IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )}
                    </List>
                    <Button onClick={this.showCompleted} variant="contained" color="secondary" style={{ margin: 10 }} >Show completed</Button>
                    {
                        this.state.showCompleted ? (
                            <List>
                                {this.state.completedData.map(e =>
                                    <ListItem key={e.id}>
                                        <ListItemText primary={e.title} />
                                    </ListItem>
                                )}
                            </List>
                        ) : null
                    }
                </Paper>
        )
    }
}

export default Form
