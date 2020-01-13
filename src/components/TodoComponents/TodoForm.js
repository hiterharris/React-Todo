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
                    value={this.state.newTask}
                    onChange={this.handleChanges}
                    />
                    <button>Add</button>
                </form>
                <button onClick={this.props.removeCompleted} >Clear All</button>
            </div>
        );
        }
    }

export default TodoForm;


