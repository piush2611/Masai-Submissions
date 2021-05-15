import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import SignUp from './SignUp'
import NotFound from './NotFound'
import Login from './Login'
import Details from './Details'
import Blogs from './Blogs'
import Blog from './Blog'
import CreateBlog from './CreateBlog'
import axios from 'axios'

export class Routes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            flag: false,
            notFound : false
        }
    }

    componentDidMount() {
        this.logout()
    }

    login = () => {
        let token = localStorage.getItem("token")
        axios.get(`http://127.0.0.1:5000/user/details`, { headers: { "Authorization": "Bearer " + JSON.parse(token) } })
            .then(res => {
                let data = res.data.user[0]
                console.log(res.data)
                this.setState({
                    username: data['username'],
                    flag: true
                })
            })
    }

    logout = () => {
        localStorage.removeItem('token')
        this.setState({
            flag: false
        })
    }

    notFound = () => {
        this.setState({
            notFound : true
        })
    }

    render() {
        if(!this.state.notFound){
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to='/' className="navbar-brand text-decoration-none">Blog Application</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to='/createBlog' className="nav-link" ><button className="btn btn-info my-1">Create new blog</button></Link>
                            </li>
                            {
                                this.state.flag
                                    ?
                                    <>
                                        <li className="nav-item">
                                            <Link to='/details' className="nav-link"><button className="btn btn-primary  text-white m-1"><img src="https://img.icons8.com/material-sharp/24/000000/user.png" className="mr-1" alt="userLogo" />{this.state.username}</button></Link>
                                        </li>
                                        <li className="nav-item">
                                            <div className="nav-link mt-1"><button className=" btn btn-danger text-white" onClick={this.logout} >Logout</button></div>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="nav-item">
                                            <Link to='/login' className="text-decoration-none nav-link my-1" ><button className=" btn btn-danger text-white">Login</button></Link>
                                        </li>
                                    </>
                            }
                        </ul>
                    </div>
                </nav>

                <Switch>
                    <Route path='/' exact component={Blogs} />
                    <Route path='/createBlog' exact render={(props) => <CreateBlog {...props} loggedIn={this.state.flag}  />} />
                    <Route path='/signup' exact component={SignUp} />
                    <Route path='/login' exact render={(props) => <Login  {...props} login={this.login} />} />
                    <Route path='/details' render={(props) => <Details {...props} loggedIn={this.state.flag}  />} />
                    <Route path='/blog/:id' exact render={(props) => <Blog {...props} loggedIn={this.state.flag} username={this.state.username}  />} />
                    <Route render={() => <NotFound flag={this.notFound} />} />
                </Switch>
                {/* <a href="https://icons8.com/icon/84020/user">User icon by Icons8</a> */}
            </div>
        )
    }
    else {
        return  <Route render={() => <NotFound flag={this.notFound} />} />
    }
    }
}

export default Routes