import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    todoList: [],
  };

  handleSubmit = (event) => {
    let taskDesc = event.target.elements.todoTask.value;
    if (taskDesc.length > 0) {
      this.setState({ todoList: [...this.state.todoList, taskDesc] });
      event.target.reset();
    }
    event.preventDefault();
  };

  deleteTodoTask = (event, index) => {
    let taskArray = [...this.state.todoList];
    taskArray.splice(index, 1);
    this.setState({ todoList: taskArray });
  };

  render() {
    return (
      <div className="neumorphism box">
        <div className="jumbotron jumbotron-fluid py-2">
          <div className="container">
            <h2 className="display-4 text-center">My To Do List</h2>
          </div>
        </div>
        <form className="mb-3" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Please enter your task"
              autoComplete="off"
              name="todoTask"
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-outline-success">
                Add
              </button>
            </div>
          </div>
        </form>

        <ul className="list-group">
          {this.state.todoList.map((item, index) => {
            return (
              <li className="list-group-item" key={index}>
                {item}
                <button
                  className="btn btn-sm btn-outline-danger mx-3"
                  onCLick={(event) => {
                    this.deleteTodoTask(event, index);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

// handleSubmit = (event) => {
//   let taskDesc = event.target.elements.todoTask.value;
//   if (taskDesc.length > 0) {
//     this.setState({ todoList: [...this.todoList, taskDesc] });
//     event.target.reset();
//   }
//   event.preventDefault();
// };

export default App;
