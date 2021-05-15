import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export class CreateBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blog: "",
      title: "",
      category: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    let token = localStorage.getItem("token");
    let newBlog = {
      title: this.state.title,
      blog: this.state.blog,
      category: this.state.category,
      Authorization: "Bearer " + JSON.parse(token)
    };

    axios({
      method: "post",
      baseURL: `http://127.0.0.1:5000/user/blog/create`,
      headers: { Authorization: "Bearer " + JSON.parse(token) },
      data: newBlog
    })
      .then(res => {
        alert(res.data.message);
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        {this.props.loggedIn ? (
          <div className="container w-50">
            <form onSubmit={this.handleClick}>
              <label htmlFor="Title">Title</label>
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                className="form-control mb-2"
              />
              <label htmlFor="blog">Blog</label>
              <textarea
                // type="textarea"
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
                <option value="web development">Web development</option>
                <option value="food">Food</option>
                <option value="fashion">Fashion</option>
              </select>
              <input
                type="submit"
                value={"Submit"}
                className="btn btn-danger btn-block my-2"
              />
            </form>
          </div>
        ) : (
          <Redirect to="/login" />
        )}
      </>
    );
  }
}

export default CreateBlog;
