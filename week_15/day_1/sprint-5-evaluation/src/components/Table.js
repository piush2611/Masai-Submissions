import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { filterByCategory, sortByDate } from './Redux/Action'
import Styles from './Routes/Styles.module.css'
import { Table, TableBody, TableHead, Paper, TableRow, TableCell, TableContainer, MenuItem, FormControl,Select, Tab} from '@material-ui/core'
import Pagination from './Pagination'

export class DataTable extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             filterByCategory:"",
             sortByDate:"",
             firstIndex:0,
             lastIndex:5,
             resultsPerPage:5
        }
    }
    
    handleChange = e => {
        if(e.target.name == "filterByCategory"){
            this.props.filterByCategory(e.target.value)    
        }
        else if(e.target.name == "sortByDate"){
            this.props.sortByDate(e.target.value)
        }
    }

    handleClick = num => {
        this.setState({
            firstIndex: num-5,
            lastIndex:  num   
        })
    }

    render() {
        return (
            <div className={Styles.center}>
                <div className={Styles.dFlex}>
                    <FormControl>
                        <Select value={this.state.filterByCategory} name="filterByCategory" onChange={this.handleChange} displayEmpty >
                            <MenuItem value="" disabled >
                                Filter by category
                            </MenuItem>
                            <MenuItem value={"all"}>All</MenuItem>
                            <MenuItem value={"random"}>Random</MenuItem>
                            <MenuItem value={"general"}>General</MenuItem>
                            <MenuItem value={"programming"}>Programming</MenuItem>
                            <MenuItem value={"algorithm"}>Algorithm</MenuItem>
                            <MenuItem value={"suggestions"}>Suggestions</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl>
                        <Select value={this.state.sortByDate} name="sortByDate" onChange={this.handleChange} displayEmpty >
                            <MenuItem value="" disabled>Sort by date</MenuItem>
                            <MenuItem value={"asc"}>Ascending</MenuItem>
                            <MenuItem value={"desc"}>Descending</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className={Styles.pagination}>
                    <Pagination handleClick={this.handleClick} length={this.props.data.length} />
                </div>
                <TableContainer component={Paper} >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Username</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.props.data.slice(this.state.firstIndex, this.state.lastIndex).map(e => 
                                <TableRow key={e.id}>
                                    <TableCell><Link to={`/viewAll/${e.id}`} className={Styles.noTextDecoration}>{e.title}</Link></TableCell>
                                    <TableCell>{e.category}</TableCell>
                                    <TableCell>{e.username}</TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
                </TableContainer>
                <div className={Styles.color}>  Note : Click on title to see the full topic</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.data
})

const mapDispatchToProps = dispatch => ({
    filterByCategory: (payload) => dispatch(filterByCategory(payload)),
    sortByDate: (payload) => dispatch(sortByDate(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(DataTable)
