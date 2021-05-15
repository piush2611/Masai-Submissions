import React, { Component } from 'react'
import { connect } from 'react-redux'
import { menuData } from './Redux/Action'
import { Link } from 'react-router-dom'
import Styles from './Styles.module.css'
import Category from './Category'
import { sortByCategory,logout } from './Redux/Action'
import { Redirect } from 'react-router-dom'

export class Home extends Component {

    handleExplore = id => {
        this.props.menuData(Number(id))
        this.props.history.push(`/menu/${id}`)
    }

    handleCategory = category => {
        this.props.sortByCategory(category)
    }

    handleClick = () => {
        this.props.logout()
        this.props.history.push("/login")
    }

    render() {
        if(this.props.login){
            return (
                <div className="container">
                    <button className="btn btn-info" onClick={this.handleClick}>Logout</button>
                    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_1440,f_auto,ar_2880:595,q_auto:eco/dpr_1/image/vm/970ac5ff-a30e-448f-b28e-db7319f2050c.jpg" alt="" className="img-fluid my-2" />
                    <div className="jumbotron bg-light">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <h1 className="text-dark">Want to see your restaurant on food delivery app ?</h1>
                                <h2 className="text-warning">What are you waiting for fill this form now !</h2>
                            </div>
                            <div className="col-12 col-md-6 text-center">
                                <Link to="/addNewRestaurant" className="h1 text-dark"> Register <br/> your <br/> restaurant</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-between mt-2">
                        <Category title="All" handleCategory={this.handleCategory} />
                        <Category title="North Indian" handleCategory={this.handleCategory} />
                        <Category title="South Indian" handleCategory={this.handleCategory} />
                    </div>
                    <div className="row p-5">
                    {this.props.database.map(e=> 
                        <div className="col-12 col-md-6 col-lg-4 p-4 " key={e.id} >
                            <img  src={e.src} alt={e.title} className={`img-thumbnail ${Styles.onZoom}`}/>
                            <h5 className="text-dark my-1">{e.title}</h5>
                            <div className="text-success">{e.cuisine}</div>
                            <div className="d-flex justify-content-between">
                                <div className="text-warning">Rating : {e.rating}</div>
                                <div className="text-primary"> Discount {e.discount}</div>
                            </div>
                            <button className="btn-block btn btn-outline-info" onClick={() => this.handleExplore(e.id)}>Explore</button>
                        </div>      
                    )}
                    </div>
                </div>
            )
        }
        else {
           return  <Redirect to='/login' />
        }
    }
}

const mapStateToProps = (state) => ({
    database: state.data,
    login: state.login
})

const mapDispatchToProps = dispatch => ({
    menuData: (payload) => dispatch(menuData(payload)),
    sortByCategory: (payload) => dispatch(sortByCategory(payload)),
    logout: (payload) => dispatch(logout(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
