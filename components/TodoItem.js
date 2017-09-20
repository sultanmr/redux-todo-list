import React from 'react';

import actions from '../redux/actions'

class TodoItem extends React.Component {
    handleComplete () {
        this.props.dispatch(actions.completeTodo(this.props.todo.id))
    }
    handleDelete () {
        this.props.dispatch(actions.deleteTodo(this.props.todo.id))
    }
    render () {
        return (
            <li>
            <div>{this.props.todo.text}
            <button onClick={this.handleComplete.bind(this)}>Mark as completed</button>
            <button onClick={this.handleDelete.bind(this)}>Delete todo</button>
            </div>
            </li>
               
        );
    }
}

export default TodoItem;