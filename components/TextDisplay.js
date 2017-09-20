import React from 'react';

class TextDisplay extends React.Component {
    render (props) {
        return (<div>
        {this.props.text}
        <br/><button onClick={this.props.deleteLetter}>delete one letter</button>
        </div>);
    }
}

export default TextDisplay;