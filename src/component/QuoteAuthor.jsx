import React from 'react';

/**
 * The author of the current quote
 * 
 * @param {color} props The color of the text 
 */
const QuoteAuthor = (props) => {
    const style = { color: props.color };
    return (
        <div id='author' style={style}>
            <p>{"- " + props.author}</p>
        </div>
    );
}

export default QuoteAuthor;