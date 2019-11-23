import React, { Component } from "react";
import Addtodo from "./Component/Addtodo";
import Todos from "./Component/Todos";
export default class App extends Component {
  state = {
    todo: [],
    value: "dammy foolish"
  };
  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      todo: [...this.state.todo, this.state.value],
      value: ""
    });
  };
  handleDelete = tod => {
    let newTodo = [...this.state.todo];
    let filterTodos = newTodo.filter(dodo => dodo !== tod);
    this.setState({ todo: filterTodos });
  };

  componentDidUpdate() {
    console.log("updated");
  }
  componentDidMount() {
    console.log("mounted");
  }
  render() {
    const { value, todo } = this.state;
    return (
      <div>
        <h1>Todo</h1>
        <Addtodo
          todo={todo}
          value={value}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Todos todo={todo} handleDelete={this.handleDelete} />
      </div>
    );
  }
}
