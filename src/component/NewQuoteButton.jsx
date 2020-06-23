import React from 'react';

/**
 * A button to get a new quote and display it on the screen. 
 * @param {color} props The background color of the button
 */
const NewQuoteButton = (props) => {
    const style = { backgroundColor: props.color };
    return (
        <button id='new-quote' onClick={props.handleChangeQuote} style={style}>New Quote</button>
    );
}

export default NewQuoteButton;