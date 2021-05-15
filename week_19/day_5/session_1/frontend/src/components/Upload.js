import React, { Component } from 'react'
import axios from 'axios'

export class Upload extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             file: "",
             url : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.files[0]
        })
        console.log(e.target.files[0])
    }

    handleSubmit = (e) => {
        e.preventDefault()
        var data = new FormData()
        data.append('picture', this.state.file)
        console.log(data)
        axios.post(`http://127.0.0.1:5000/auth/uploader`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        } )
            .then(res => {
                console.log(res.data.path)
                this.setState({
                    url : `http://127.0.0.1:5000/${res.data.path}`
                })
            })
            .catch(err => console.log(err))

    }

    
    render() {
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <input type="file" name="file"  onChange={this.handleChange} />
                <input type="submit" value="submit" />
            </form>
            <img src={this.state.url} alt=""/>
            </>
        )
    }
}

export default Upload
