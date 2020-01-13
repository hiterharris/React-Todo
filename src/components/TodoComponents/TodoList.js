import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.list.map((item, i) => {
          return (
            <div key={i}>
                <Todo item={item} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default TodoList;
