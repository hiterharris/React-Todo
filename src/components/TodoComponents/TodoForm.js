import React from 'react';
import '../../App.css'

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
        }
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({
            newTask: e.target.value,
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.newTask)
    }

    render() {
        return (
            <div className='TodoForm'>
                <form onSubmit={this.handleSubmit}>
                    <input
                    type="text"
                    name="task"
                    placeholder="Add Todo"
                    value={this.state.newTask}
                    onChange={this.handleChanges}
                    />
                    <button className='form-btn'>Add</button>
                </form>
                <button className='form-btn' onClick={this.props.removeCompleted} >Clear Completed</button>
            </div>
        );
        }
    }

export default TodoForm;


