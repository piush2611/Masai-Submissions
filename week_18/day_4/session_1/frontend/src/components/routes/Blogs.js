import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class Blogs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: []
    };
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:5000/blog/read").then(res => {
      this.setState({
        blogs: res.data.blogs
      });
    });
  }

  logout = () => {
    localStorage.removeItem("token");
  };

  render() {
    return (
      <div className="container p-5">
        <h2 className="m-2">Latest blogs</h2>
        {this.state.blogs &&
          this.state.blogs.map(blog => (
            <div className="row mb-2 " key={blog.id}>
              <div className="col-12 mb-2">
                <blockquote className="blockquote text-left">
                  <Link
                    to={`/blog/${blog.id}`}
                    className="text-decoration-none h5 font-weight-bold mb-0"
                  >
                    {blog.title}
                  </Link>
                  <div className="text-truncate">{blog.blog}</div>
                  <footer className="blockquote-footer">
                    Posted by <cite title="Source Title">{blog.username}</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default Blogs;
