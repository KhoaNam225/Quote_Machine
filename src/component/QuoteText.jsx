import React from 'react';

/**
 * The text containing the current quote
 * 
 * @param {Object} props.color contains the color of the text
 */
const QuoteText = (props) => {
    const style = { color: props.color }
    return (
        <div id='text' style={style}>
            <p>{props.text}</p>
        </div>
    );
} 

export default QuoteText;