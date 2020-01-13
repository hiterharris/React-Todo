import React from 'react';
import {data} from './assets/data';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: data,
    }
  }

  addItem = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      list: [...this.state.list, newTask]
    });
  }

  render() {
    return (
      <div>
        <h2>To Do</h2>
        <TodoForm addItem={this.addItem} />
        <button>Clear All</button>
        <TodoList list={this.state.list} />
      </div>
    );
  }
}

export default App;
