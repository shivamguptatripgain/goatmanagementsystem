const capitalizeAllWords = (string) => {
    return string
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
};

const formatDate = (isoString) => {
    return isoString.split('T')[0]; // takes '2025-05-10T00:00:00.000Z' → '2025-05-10'
};


export { capitalizeAllWords, formatDate };