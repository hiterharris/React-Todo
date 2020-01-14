import React from 'react';
import '../../App.css'

class Todo extends React.Component {
  render() {
    return (
        <div
            className={`${this.props.item.completed ? "complete" : "incomplete"}`}
            onClick={() => this.props.toggleComplete(this.props.item.id)}
            >
            <h2>{this.props.item.task}</h2>
        </div>
    );
  }
}

export default Todo;
