function extractURLs(text) {
    // Regular expression to match URLs
    const urlRegex = /https?:\/\/[^\s]+/g;

    // Find all matches and store them in an array
    const urls = text.match(urlRegex);

    // If no URLs are found, return an empty array
    return urls || [];
}

export default  extractURLs;