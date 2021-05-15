import React, { Component } from "react";
import axios from 'axios'
import { Link, Redirect } from "react-router-dom";

export class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      blogs: [],
      title: "",
      blog: "",
      category: ""
    };
  }

  componentDidMount() {
    let token = localStorage.getItem("token");

    axios({
        method: "get",
        headers: { Authorization: "Bearer " + JSON.parse(token) },
        baseURL: `http://127.0.0.1:5000/user/blog/read`
    })
    .then(res => {
        console.log(res);
        this.setState({
          blogs: [...res.data.blogs]
        });
      });
    }

  handleDelete = id => {
    let token = localStorage.getItem("token");
    axios({
      method: "delete",
      baseURL: `http://127.0.0.1:5000/user/blog/delete/${id}`,
      headers: { Authorization: "Bearer " + JSON.parse(token) }
    })
    .then(res => {
      console.log(res.data.message);
      this.componentDidMount();
    })
    .catch(err => console.log(err));
  };

  handleEdit = id => {
    axios.get(`http://127.0.0.1:5000/blog/read/${id}`).then(res => {
      let data = res.data.blog[0];
      this.setState({
        title: data["title"],
        blog: data["blog"],
        category: data["category"]
      });
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleUpdate = id => {
    let token = localStorage.getItem("token");
    let updatedBlog = {
      title: this.state.title,
      blog: this.state.blog,
      category: this.state.category
    };

    axios({
      method: "put",
      baseURL: `http://127.0.0.1:5000/user/blog/update/${id}`,
      headers: { Authorization: "Bearer " + JSON.parse(token) },
      data: updatedBlog
    })
      .then(res => {
        console.log(res);
        this.componentDidMount();
      })
      .catch(err => console.log(err));
  };

  render() {
    if (this.props.loggedIn)
      return (
        <div className="container p-5 mx-auto">
          <h1>My blogs</h1>
          {
            this.state.blogs.length > 0  ? null : <div className="my-2 text-primary">You don't have any blog, create your first blog now !</div>
          }
          {
            this.state.blogs &&
            this.state.blogs.map(blog => (
              <div key={blog.id} className="my-2">
                <Link to={`/blog/${blog.id}`} className="text-decoration-none">
                  <div>{blog.title}</div>
                </Link>
                <button
                  type="button"
                  className="btn btn-primary btn-sm mr-2"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Delete
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Are you sure you want to delete blog
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-dismiss="modal"
                          onClick={() => this.handleDelete(blog.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  data-toggle="modal"
                  data-target="#exampleModal2"
                  onClick={() => this.handleEdit(blog.id)}
                >
                  Edit
                </button>
                <div
                  className="modal fade"
                  id="exampleModal2"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Edit blog
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <label htmlFor="Title">Title</label>
                        <input
                          type="text"
                          name="title"
                          value={this.state.title}
                          onChange={this.handleChange}
                          className="form-control mb-2"
                        />
                        <label htmlFor="blog">Blog</label>
                        <input
                          type="textarea"
                          name="blog"
                          value={this.state.blog}
                          onChange={this.handleChange}
                          className="form-control mb-2"
                        />
                        <label htmlFor="category">Category</label>
                        <select
                          onChange={this.handleChange}
                          value={this.state.category}
                          name="category"
                          className="form-control"
                        >
                          <option value="sports">Sports</option>
                          <option value="films">Films</option>
                          <option value="travel">Travel</option>
                          <option value="adventure">Adventure</option>
                          <option value="web development">
                            Web development
                          </option>
                          <option value="food">Food</option>
                          <option value="fashion">Fashion</option>
                        </select>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-dismiss="modal"
                          onClick={() => this.handleUpdate(blog.id)}
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      );
    else {
      return <Redirect to="/login" />;
    }
  }
}

export default Details;
