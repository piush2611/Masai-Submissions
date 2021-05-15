import React, { Component } from "react";
import axios from "axios";

export class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      folders: [],
      parentPath: "",
      folderName: "",
      flag: false
    };
  }

  componentDidMount() {
    axios({
      method: "get",
      baseURL: `http://127.0.0.1:5000/`
    })
      .then(res => {
        console.log(res.data);
        this.setState({
          folders: [...res.data.folders],
          parentPath: [...res.data.folders[0].path]
        });
      })
      .catch(err => console.log(err));
  }

  handleClick = (pathName, folderName) => {
    pathName = pathName + folderName + "/";
    this.setState({ parentPath: pathName });
    this.getUpdatedFolder(pathName);
  };

  handleFolderForm = () => {
    this.setState({ flag: !this.state.flag });
  };

  handleAddFolder = () => {
    axios({
      method: "post",
      baseURL: `http://127.0.0.1:5000/create`,
      data: {
        path: this.state.parentPath,
        folderName: this.state.folderName
      }
    })
      .then(res => {
        console.log(res.data);
        this.setState({
          msg: res.data.message,
          folderName: ""
        });
        this.getUpdatedFolder(this.state.parentPath);
      })
      .catch(err => console.log(err));
  };

  getUpdatedFolder = pathName => {
    axios({
      method: "post",
      baseURL: `http://127.0.0.1:5000/read`,
      data: { path: pathName }
    })
      .then(res => {
        console.log(res.data);
        this.setState({
          folders: [...res.data.folders],
          parentPath:
            res.data.folders.length > 0 ? res.data.folders[0].path : pathName
        });
      })
      .catch(err => console.log(err));
  };

  handleBreadcrumb = (p, i) => {
    let arr = this.state.parentPath.split("/");
    let path = "/";
    for (let j = 0; j < i + 1; j++) {
      if (i == 0) {
        path += arr[j + 1] + "/";
        break;
      } else {
        path += arr[j + 1] + "/";
      }
    }
    this.getUpdatedFolder(path);
  };

  render() {
    return (
      <div className="container bg-light p-5">
        <h3 className="d-flex">
          {this.state.parentPath.length > 1 ? (
            <>
              {" "}
              <div onClick={() => this.componentDidMount()}>/Home </div>{" "}
              {[...this.state.parentPath.split("/").slice(1)].map(
                (bread, index) => (
                  <div
                    key={bread}
                    onClick={() => this.handleBreadcrumb(bread, index)}
                    className="mx-2"
                  >
                    / {bread}
                  </div>
                )
              )}{" "}
            </>
          ) : (
            <div>/Home</div>
          )}
        </h3>
        <div className="row">
          {this.state.folders &&
            this.state.folders.map(folder => (
              <div key={folder.folderName} className="col-6 col-md-3 mb-2">
                <button
                  className="btn btn-block btn-warning m-2"
                  onClick={() =>
                    this.handleClick(folder.path, folder.folderName)
                  }
                >
                  {folder.folderName}
                </button>
              </div>
            ))}
          <div className="col6 col-md-5 my-2">
            <div className="d-flex">
              <button
                className="btn btn-warning ml-2"
                onClick={this.handleFolderForm}
              >
                Add Folder
              </button>
              {this.state.flag ? (
                <>
                  <input
                    type="text"
                    name="folderName"
                    value={this.state.folderName}
                    placeholder="Fold-name.."
                    onChange={e =>
                      this.setState({ folderName: e.target.value })
                    }
                    className="form-control w-25 mx-1"
                  />
                  <button
                    className="btn btn-sm btn-dark"
                    onClick={this.handleAddFolder}
                  >
                    Add
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Routes;
