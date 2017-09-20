import React from 'react';

import TextDisplay from './TextDisplay';

class TextInput extends React.Component {
    constructor(props, context) {
        super (props, context);
        this.state = {
            inputText: 'initial text'
        };
    }
    deleteLetter () {
        const inputText = this.state.inputText.substring(0, this.state.inputText.length-1);
   
        this.setState ({inputText});
    }
    handleChange (e) {
        const inputText = e.target.value;
        this.setState ({inputText});
    }

    render () {
        return (<div>
        <input type='text'
        placeholder="text input here..."
        value={this.state.inputText}
        onChange={this.handleChange.bind(this)}
        />
        <TextDisplay 
        text={this.state.inputText}
        deleteLetter = {this.deleteLetter.bind(this)}

        />
        </div>);
    }
}

export default TextInput;