import React from 'react';
import QuoteText from './QuoteText';
import QuoteAuthor from './QuoteAuthor';
import NewQuoteButton from './NewQuoteButton';
import TweetQuote from './TweetQuote';

import { colors, chooseNewColor, chooseRandomQuote } from '../ultilities';

const QUOTE_URL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

/**
 * The root component which contains the quote-text, quote-author,
 * new-quote and tweet-quote components.
 */
class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [],  // All the quotes 
            currentQuote: '',  // The current quote displayed on the screen
            currentAuthor: '',  // The author of the current quote
            currentColor: chooseNewColor(colors)  // The color of the background and text
        };
    }

    /**
     *  Fetch a quote and choose a random quote
     */
    componentDidMount() { 
        fetch(QUOTE_URL)
        .then(response => response.json())
        .then(data => {
            let quote = chooseRandomQuote(data.quotes);
            this.setState({
                quotes: data.quotes,
                currentQuote: quote.quote,
                currentAuthor: quote.author
            });
        });
    }

    /**
     * Change the current quote everytime the new-quote button is clicked
     */
    changeQuote = () => {
        let quote = chooseRandomQuote(this.state.quotes);
        let newColor = chooseNewColor(colors);
        this.setState({
            currentQuote: quote.quote,
            currentAuthor: quote.author,
            currentColor: newColor
        });
    }

    render() {
        const style = { backgroundColor: this.state.currentColor };
        return (
            <div id='root' style={ style }>
                <div id='quote-box'>
                    <QuoteText text={this.state.currentQuote} color={this.state.currentColor}/>
                    <QuoteAuthor author={this.state.currentAuthor} color={this.state.currentColor}/>
                    <NewQuoteButton handleChangeQuote={this.changeQuote} color={this.state.currentColor}/>
                    <TweetQuote quote={this.state.currentQuote} color={this.state.currentColor} />
                </div>
            </div>
        );
    }
}

export default QuoteBox;