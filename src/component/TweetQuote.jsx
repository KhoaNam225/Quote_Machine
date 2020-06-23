import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const TWEET_LINK = 'https://twitter.com/intent/tweet?text=';

/**
 * A link used to tweet the current quote
 * 
 * @param {Object} props.color contain a color for the link
 */
const TweetQuote = (props) => {
    const style = { color: props.color };
    return (
        <a id='tweet-quote' href={TWEET_LINK + props.quote} target='_blank' rel="noopener noreferrer" style={style}>
            <FontAwesomeIcon icon={ faTwitter } />
        </a>
    );
}

export default TweetQuote;