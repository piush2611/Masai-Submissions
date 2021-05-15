import React, { Component } from 'react'
import axios from 'axios'
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

export class Routes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            authorname: '',
            category: '',
            bookname: '',
            authors: [],
            categories: [],
            showAuthors: false,
            showCtg: false,
            publisher: '',
            books: [],
            msg : '',
            notFoundFlag : false
        }
    }

    componentDidMount() {
        axios({
            method: 'get',
            baseURL: `http://127.0.0.1:5000/book/read`
        })
        .then(res => {
            this.setState({ books: res.data.books })
            console.log(res.data.books)
        })
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (input) => {
        axios({
            method: 'get',
            baseURL: `http://127.0.0.1:5000/book/read/${input}`
        })
            .then(res => {
                this.setState({ books: res.data.books, msg : res.data.message })
                if( res.data.notFound ){
                    this.setState({ notFoundFlag : true})
                }
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    addAuthor = () => {
        if (this.state.authorname != '') {
            this.setState({
                authors: [...this.state.authors, this.state.authorname],
                authorname: '',
                showAuthors: true
            })
        }
    }

    addCategory = () => {
        if (this.state.category != '') {
            this.setState({
                categories: [...this.state.categories, this.state.category],
                category: '',
                showCtg: true
            })
        }
    }

    deleteAuthor = (author) => {
        this.setState({
            authors: this.state.authors.filter(a => a != author)
        })
    }

    deleteCtg = (ctg) => {
        this.setState({
            categories: this.state.categories.filter(a => a != ctg)
        })
    }

    addBook = () => {

        axios({
            method: 'post',
            baseURL: `http://127.0.0.1:5000/book/create`,
            data: {
                bookname: this.state.bookname,
                publisher: this.state.publisher,
                authors: this.state.authors,
                categories: this.state.categories
            }
        })
            .then(res => {
                console.log(res)
                this.setState({
                    authorname: '',
                    category: '',
                    bookname: '',
                    authors: [],
                    categories: [],
                    publisher: ''
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="container-fluid" >
                <div className="text-center my-2 h1 font-weight-bold">Library</div>
                <div className="row p-2">
                    <div className="col-12 col-md-6  col-lg-3">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-searchByName" role="tab" aria-controls="v-pills-searchByNamsearchByAuthor" aria-selected="true">SEARCH</a>
                            <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-addBook" role="tab" aria-controls="v-pills-addBook" aria-selected="false">ADD BOOK</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-9">
                        <div className="tab-content" id="v-pills-tab">
                            <div className="tab-pane fade show active" id="v-pills-searchByName" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <div className=" px-2">
                                    <input type="text" id="bookname" placeholder="Search by book-ttile, author, category or publisher" value={this.state.bookname} onChange={this.handleChange} className="form-control mb-2" />
                                    <button className="btn btn-primary btn-block bookname" onClick={() => this.handleSubmit(this.state.bookname)}>Get Books</button>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-addBook" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="bookname">Book name</label>
                                        <input type="text" id="bookname" value={this.state.bookname} onChange={this.handleChange} className="form-control mb-2" />
                                        <label htmlFor="authorname">Author name</label>
                                        <input type="text" id="authorname" value={this.state.authorname} onChange={this.handleChange} className="form-control mb-2" />
                                        <button className="btn btn-block btn-outline-primary" onClick={this.addAuthor}>Add author</button>
                                        <label htmlFor="category">Category</label>
                                        <input type="text" id="category" value={this.state.category} onChange={this.handleChange} className="form-control mb-2" />
                                        <button className="btn btn-block btn-outline-primary" onClick={this.addCategory}>Add category</button>
                                        <label htmlFor="publisher">Publisher</label>
                                        <input type="text" id="publisher" value={this.state.publisher} onChange={this.handleChange} className="form-control mb-2" />
                                        <button className="btn btn-block btn-primary" onClick={this.addBook}>ADD BOOK </button>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        {this.state.showAuthors && this.state.authors.length > 0 ? <div className="font-weight-bold">Authors added</div> : null}
                                        <div className="d-flex flex-wrap">
                                            {this.state.authors.map(author =>
                                                <Chip
                                                    key={author}
                                                    avatar={<Avatar>{author[0]}</Avatar>}
                                                    label={author}
                                                    onDelete={() => this.deleteAuthor(author)}
                                                    color="secondary"
                                                    className="m-1"
                                                />
                                            )}
                                        </div>

                                        {this.state.showCtg && this.state.categories.length > 0 ? <div className="font-weight-bold">Categories added</div> : null}
                                        <div className="d-flex flex-wrap">
                                            {this.state.categories.map(ctg =>
                                                <Chip
                                                    key={ctg}
                                                    avatar={<Avatar>{ctg[0]}</Avatar>}
                                                    label={ctg}
                                                    onDelete={() => this.deleteCtg(ctg)}
                                                    color="primary"
                                                    className="m-1"
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        this.state.books && this.state.books.map(book =>
                            <div className="col-12 col-md-6 col-lg-4 p-2" key={book.bookname} >
                                <img src="https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="img-thumbnail" />
                                <div className="p-3">
                                    <h5 className="font-weight-bold">Book : {book.bookname}</h5>
                                    <h5 className="font-weight-bold">Publisher : {book.publisher}</h5>
                                    <h5 className="font-weight-bold">Authors : </h5>
                                    <div className="d-flex flex-wrap">
                                    {
                                        book.authors.split(',').map(author => 
                                            <Chip
                                                key={author}
                                                label={author}
                                                color="primary"
                                                className="m-1"
                                            />
                                        )
                                    }
                                    </div>
                                    <h5 className="font-weight-bold">Categories : </h5>
                                    <div className="d-flex flex-wrap">
                                    {
                                        book.ctgs.split(',').map(ctg => 
                                            <Chip
                                                key={ctg}
                                                label={ctg}
                                                color="secondary"
                                                className="m-1"
                                            />
                                        )
                                    }
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                {this.state.notFoundFlag ? <h1 className="text-center">{this.state.msg}</h1> : null}
            </div>
        )
    }
}

export default Routes
