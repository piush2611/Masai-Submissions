import React, { Component } from 'react'
import axios from 'axios'
import RenderTable from './RenderTable'
import RenderRepoTable from './RenderRepoTable'
import Row2 from './Row2'

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: "",
            input2:"",
            data: [],
            status: false,
            reposData: [],
            showRepos: false,
            repoSearchData: [],
            displayTable: false,
            secondPart: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    // function handling submit button
    handleClick = () => {
        axios.get("https://api.github.com/search/users?q=" + this.state.input)
            .then(res => {
                const data = res.data.items;
                if (data.length === 0) {
                    alert("User doesn't exist")
                }
                else {
                    this.setState({
                        data: [...data],
                        status: true,
                        showRepos:false
                    })
                }
            }
            )
            .catch(err => console.log(err))
    }


    // function making api call to get repositories
    getInfo = url => {
        axios.get(url)
            .then(res => {
                const data = res.data
                this.setState({
                    reposData: data,
                    showRepos: true,
                    status: false,
                    modal: true
                })
            })
            .catch(err => console.log(err))
    }

    getRepos =() => {
        axios.get("https://api.github.com/search/repositories?q=language:"+this.state.input2)
             .then(res => {

                 const data = res.data.items;
                 console.log(data)
                 this.setState({
                     repoSearchData: data,
                     displayTable:true
                 })
             })
             .catch(err => console.log(err))
    }



    render() {
        return (
            <div className="container p-5">

                {/* form */}
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <input type="text"
                            placeholder="Enter username"
                            onChange={this.handleChange}
                            name="input"
                            className="form-control my-2" />
                        <button className="btn btn-info btn-block" onClick={this.handleClick}>Submit</button>
                    </div>
                    <div className="col-12 col-lg-6">
                        <input type="text"
                            placeholder="Enter programming language"
                            onChange={this.handleChange}
                            name="input2"
                            className="form-control my-2" />
                        <button className="btn btn-info btn-block" onClick={this.getRepos}>Submit</button>
                    </div>
                </div>


                {/* table for all users available for particular searched name */}
                { this.state.status ? <RenderTable data={this.state.data} click={this.getInfo} /> : null }


                {/* table displaying repos data on clicking get more info */}
                { this.state.showRepos ? <RenderRepoTable data={this.state.reposData} /> : null }
                
                {/* table for particular programming language repos */}
                {this.state.displayTable ? (
                    <table className="table table-responsive">
                        <tbody>
                            <tr>
                                <td>Owner username</td>
                                <td>Description</td>
                                <td>url</td>
                            </tr>
                            {this.state.repoSearchData.map(e => <Row2 data={e} key={Math.random()} />)}
                        </tbody>
                    </table>
                ) : null }
            </div>
        )
    }
}

export default Form


