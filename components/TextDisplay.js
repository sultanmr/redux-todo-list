import React from 'react';

class TextDisplay extends React.Component {
    render () {
        return <div>{this.props.text}</div>;
    }
}

export default TextDisplay;