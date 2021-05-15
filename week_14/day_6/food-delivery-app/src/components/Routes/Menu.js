import React, { Component } from 'react'
import { connect } from 'react-redux'
import Styles from '../Styles.module.css'
import { addToCart } from '../Redux/Action'
import { Redirect } from 'react-router-dom'

export class Menu extends Component {

    handleClick = (id) => {

        // if(this.props.login){
            this.props.addToCart(Number(id))
            alert("Food item added to cart")
        // } 
    }
    render() {
        return (
            <div className="container p-5"> 
                <div className="row">
                    {this.props.menuDb.map(e =>
                    <div className="col-12 col-md-6 col-lg-4 p-4" key={e.id} >
                        <img src={e.src} alt={e.title} className={`img-thumbnail ${Styles.onZoom}`}/>
                        <div className="text-dark">{e.title}</div>
                        <div className="text-info">₹ {e.price}</div>
                        <button className="btn btn-outline-warning my-1 btn-block"  onClick={ () => this.handleClick(e.id) }>ADD</button>
                    </div>    
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    menuDb: state.menuDb,
    login: state.login
})

const mapDispatchToProps = dispatch => ({
    addToCart: (payload) => dispatch(addToCart(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
