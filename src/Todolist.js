import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as todoActions from "./actions/todos";

class Todolist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodoText: ""
    };
  }

  addNewTodo = () => {
    this.props.addTodo(this.state.newTodoText);
    this.setState({ newTodoText: "" });
  };

  render() {
    return (
      <>
        <ul>
          {this.props.todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
        <input
          type="text"
          value={this.state.newTodoText}
          onChange={e => this.setState({ newTodoText: e.target.value })}
        />
        <button onClick={this.addNewTodo}> Novo to do</button>
      </>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos 
}) 

const mapDispatchToProps = dispatch =>
  bindActionCreators(todoActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
