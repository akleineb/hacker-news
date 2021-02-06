export const getHostNameFromUrl = (url) => {
    const parser = document.createElement('a');
    parser.href = url;

    if (parser.hostname === 'localhost') {
        return 'could not resolve';
    }

    return parser.hostname;
}