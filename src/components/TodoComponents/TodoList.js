import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.list.map((item, i) => {
          return <Todo key={i} item={item} toggleComplete={this.props.toggleComplete} />;
        })}
        <button onClick={() => this.props.removeCompleted()} >Clear All</button>
      </div>
    );
  }
}

export default TodoList;
