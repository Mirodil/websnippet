export default function urlize(str) {
    return str.toLowerCase().replace(/[^a-z0-9\-]/g, '-');
}