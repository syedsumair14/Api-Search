import React from "react";
import { addRecord } from "./redux/action";
import { stopApi } from "./redux/action";
import { connect } from "react-redux";

// const initState = {
//     name: "",
//     group: "",
//     class: "",
//     rollNo: "",
//     marks: {
//       s1: "",
//       s2: "",
//       s3: ""
//     }
// }

class Add extends React.Component {
  state = {
    Data: [
      {
        name: "",
        group: "",
        class: "",
        rollNo: "",
        marks: {
          s1: "",
          s2: "",
          s3: ""
        }
      }
    ]
  };

  submit = () => {
    this.props.addRecord(this.state);
    alert("Pushed");
    // this.props.stopApi(true)
    // this.props.history.push("/");
  };
  cancel = () => {
    this.props.history.push("/");
    this.props.stopApi(true);
  };

  nameChange = e => {
    this.setState(
      {
        Data: {
          name: e.target.value
        }
      },
      () => {
        console.log(this.state);
      }
    );
  };

  groupChange = e => {
    this.setState(
      {
        Data: {
          ...this.state.Data,
          group: e.target.value
        }
      },
      () => console.log(this.state)
    );
  };
  classChange = e => {
    this.setState(
      {
        Data: {
          ...this.state.Data,
          class: e.target.value
        }
      },
      () => console.log(this.state)
    );
  };

  rollChange = e => {
    this.setState(
      {
        Data: {
          ...this.state.Data,
          rollNo: e.target.value
        }
      },
      () => console.log(this.state)
    );
  };

  s1 = e => {
    this.setState(
      {
        Data: {
          ...this.state.Data,
          marks: {
            ...this.state.Data.marks,
            s1: e.target.value
          }
        }
      },
      () => console.log(this.state)
    );
  };
  s2 = e => {
    this.setState(
      {
        Data: {
          ...this.state.Data,
          marks: {
            ...this.state.Data.marks,
            s2: e.target.value
          }
        }
      },
      () => console.log(this.state)
    );
  };
  s3 = e => {
    this.setState(
      {
        Data: {
          ...this.state.Data,
          marks: {
            ...this.state.Data.marks,
            s3: e.target.value
          }
        }
      },
      () => console.log(this.state)
    );
  };
  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <fieldset
            className="offset-5 mt-5"
            style={{ width: "300px", border: "1px solid black" }}
          >
            <legend
              style={{
                border: "2px",
                width: "200px",
                border: "2px solid black"
              }}
            >
              Student Details
            </legend>
            <label htmlFor="Name">Name: </label>
            <input
              id="name"
              type="text"
              placeholder="Name of Student"
              onChange={this.nameChange}
            />
            <label htmlFor="Name">Group: </label>
            <input
              id="group"
              type="text"
              placeholder="Group of Student"
              onChange={this.groupChange}
            />
            <label htmlFor="Name">Class: </label>
            <input
              id="class"
              type="text"
              placeholder="Class of Student"
              onChange={this.classChange}
            />
            <label htmlFor="Name">Roll No: </label>
            <input
              id="roll"
              type="text"
              placeholder="Roll No of Student"
              onChange={this.rollChange}
            />
            <label htmlFor="Name">Marks: </label>
            <input
              className="col-md-3"
              id="s1"
              type="text"
              placeholder="S1"
              onChange={this.s1}
            />
            <input
              className="col-md-3"
              id="s2"
              type="text"
              placeholder="S2"
              onChange={this.s2}
            />
            <input
              className="col-md-3"
              id="s3"
              type="text"
              placeholder="S3"
              onChange={this.s3}
            />
            <button className="btn btn-success offset-3" onClick={this.submit}>
              Submit
            </button>
            <button className="btn btn-danger " onClick={this.cancel}>
              Home
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return state;
};

export default connect(
  mapStateToProps,
  { addRecord, stopApi }
)(Add);
