import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { fetchDataByPageNo, count } from '../redux/action'

export class Pagination extends Component {
    
    componentDidMount(){
        this.props.count()
    }

    render() {
        const buttons = []
        for( let i = 1; i <= Math.ceil(this.props.length/20); i++)
            buttons.push(i)
        console.log(this.props)
        return (
            <>
                { buttons.map(btn => <button key={btn} onClick={ () => this.props.handleClick(btn)} className='btn btn-sm btn-info mx-1'>{btn}</button>)}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    length : state.count
})

const mapDispatchToProps = dispatch => ({
    handleClick : (payload) => dispatch(fetchDataByPageNo(payload)),
    count : () => dispatch(count())
})

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
