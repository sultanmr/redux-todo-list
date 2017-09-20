import React from 'react';

import TodoItem from './TodoItem'

class TodoList extends React.Component {
  
    render () {
        return (
            <ul>
            {
                this.props.todos.map((todo)=>{
                    return <TodoItem key={todo.id} todo={todo} dispatch={this.props.dispatch}/>
                })
            }
            </ul>
        );
    }
}

export default TodoList;