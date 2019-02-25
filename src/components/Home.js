import React from "react";
import Axios from "axios";
import Loader from "react-loader-spinner";

import { connect } from "react-redux";
import { dataToStore } from "./redux/action";
import { showMarks } from "./redux/action";
import { NavLink } from "react-router-dom";
import { addRecord } from "./redux/action";

class Home extends React.Component {
  state = {
    apiData: [],
    searchValue: "",
    searchResult: this.props.reducer.apiResult,
    api: this.props.api,
    ref: this.props.reducer.apiResult,
    loadAgain: true
  };

  componentDidMount() {
    if (!this.props.reducer.apiResult) {
      Axios.get("http://www.mocky.io/v2/5c6ceec53700001d0ffa30c2")
        .then(Data => Object.values(Data.data))
        .then(Data => this.props.dataToStore(Data))
        .then(Data => this.setState({ apiData: Data.payload, loadAgain: false }))
        .catch(err => console.log(err));
      // this.props.dataToStore(this.state.apiResult);
    }
  }

  show = (s1, s2, s3, name) => {
    this.props.showMarks(s1, s2, s3, name);
    this.props.history.push(`/show/${name}`);
  };

  showData = () => {
    return this.props.reducer.apiResult.map((o, i) => {
      return (
        <div
          key={i}
          className="col-md-4 card offset-3 mb-5 row"
          style={{
            width: "18rem",
            backgroundColor: "grey",
            borderRadius: "30px"
          }}
        >
          <div className="card-body">
            <div
              className="card-title"
              style={{ fontWeight: "800", color: "white" }}
            >
              {o.name}
            </div>
            <div className="card-text">Group: {o.group}</div>
            <div className="card-text">Class: {o.class}</div>
            <div className="card-text">Roll No: {o.rollNo}</div>
            <div className="card-text">
              <div>Avg Marks: {(o.marks.s1 + o.marks.s2 + o.marks.s3) / 3}</div>
              <input
                type="button"
                className="btn btn-info"
                onClick={() => {
                  this.show(o.marks.s1, o.marks.s2, o.marks.s3, o.name);
                }}
                value="Show Individual Marks"
              />
            </div>
          </div>
        </div>
      );
    });
  };

  onChange = e => {
    console.log(this.props.reducer.apiResult);
    this.setState({
      searchValue: e.target.value
    });
    let res = this.props.reducer.apiResult.filter(obj =>
      obj.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
    );
    this.setState({
      searchResult: res
    });
  };

  render() {
    console.log("DID", this.props);
    return (
      <React.Fragment>
        <div className="">
          {console.log(this.state)}
          <input
            className="form-control mb-3"
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={this.state.searchValue}
            onChange={this.onChange}
          />
          {this.state.searchResult ? (
            <div>
              {this.state.searchResult.map((o, i) => {
                return (
                  <div
                    key={i}
                    className="col-md-6 card offset-3 mb-5 "
                    style={{
                      width: "18rem",
                      backgroundColor: "grey",
                      borderRadius: "30px"
                    }}
                  >
                    <div className="card-body">
                      <div
                        className="card-title"
                        style={{ fontWeight: "800", color: "white" }}
                      >
                        {o.name}
                      </div>
                      <div className="card-text">Group: {o.group}</div>
                      <div className="card-text">Class: {o.class}</div>
                      <div className="card-text">Roll No: {o.rollNo}</div>
                      <div className="card-text">
                        <div>
                          Avg Marks:{" "}
                          {(o.marks.s1 + o.marks.s2 + o.marks.s3) / 3}
                        </div>
                        <input
                          type="button"
                          className="btn btn-info"
                          onClick={() => {
                            this.show(
                              o.marks.s1,
                              o.marks.s2,
                              o.marks.s3,
                              o.name
                            );
                          }}
                          value="Show Individual Marks"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : null}
          <NavLink
            className="offset-4 mb-2 btn btn-info"
            style={{ color: "green", borderRadius: "12px" }}
            to="/add"
          >
            Add Records!
          </NavLink>
          <div className="">
            {this.props.reducer.apiResult ? (
              this.showData()
            ) : (
              <div className="offset-5">
                <Loader type="Puff" color="#00BFFF" height="100" width="100" />
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return state;
};

export default connect(
  mapStateToProps,
  { dataToStore, showMarks, addRecord }
)(Home);
