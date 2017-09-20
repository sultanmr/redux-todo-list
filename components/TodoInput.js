import React from 'react';

import actions from '../redux/actions'

class TodoInput extends React.Component {
    constructor(props, context) {
        super (props, context);
        this.state = {
            inputText: ''
        };
    }
 
    handleChange (e) {
        const inputText = e.target.value;
        this.setState ({inputText});
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.dispatch(actions.addTodo(this.state.inputText))
    }

    render () {
        return (<div>
        <form onSubmit= {this.handleSubmit.bind(this)}>
        <input type='text'
        placeholder="Type in your todo...."
        value={this.state.inputText}
        onChange={this.handleChange.bind(this)}
        />
        <input type="submit" text="Submit"/>
        </form>
        </div>);
    }
}

export default TodoInput;