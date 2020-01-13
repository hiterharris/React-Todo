import React from 'react';
import './Todo.css';

class Todo extends React.Component {
  render() {
    return (
        <div
            className={`${this.props.item.completed ? "complete" : "incomplete"}`}
            onClick={() => this.props.toggleComplete(this.props.item.id)}
            >
            <p>{this.props.item.task}</p>
        </div>
    );
  }
}

export default Todo;
