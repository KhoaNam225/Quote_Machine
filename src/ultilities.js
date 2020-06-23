const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

/**
 * Given an array of quotes, choose a random quote from that array
 * @param {Array} quotes the array containing the quotes
 */
const chooseRandomQuote = quotes => {
    let quoteNumber = quotes.length;
    let index = Math.floor(Math.random() * quoteNumber);

    return quotes[index];
}

/**
 * Given an array of colors, choose a random color from that array
 * @param {Array} colors the array containing all the colors
 */
const chooseNewColor = (colors) => {
    let index = Math.floor(Math.random() * colors.length);

    return colors[index];
}

export { colors, chooseNewColor, chooseRandomQuote };