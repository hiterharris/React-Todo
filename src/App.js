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

  toggleComplete = id => {
    const newList = this.state.list.map(item => {
      if(item.id === id) {
        return{
          ...item,
          completed: !item.completed
        }
      } else {
        return item;
      }
    });
    this.setState({
      list: newList,
    });
  }

  removeCompleted = () => {
    const removeTask = this.state.list.filter(item => {
      if(item.completed === true) {
        return '';
      } else {
        return item;
      }
    });
    this.setState({
      list: [...this.state.list, removeTask]
    });
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
        <TodoList list={this.state.list} toggleComplete={this.toggleComplete} removeCompleted={this.removeCompleted} />
      </div>
    );
  }
}

export default App;
