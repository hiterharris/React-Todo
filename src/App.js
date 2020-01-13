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
    this.setState({
      list: this.state.list.filter(item => !item.completed)
    });
  };

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
      <div className='App'>
        <h1>To Do List</h1>
        <TodoForm addItem={this.addItem} removeCompleted={this.removeCompleted} />
        <TodoList list={this.state.list} toggleComplete={this.toggleComplete} />
      </div>
    );
  }
}

export default App;
