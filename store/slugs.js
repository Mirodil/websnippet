export default function slugs() {
    const context = require.context('../posts', true, /\.md$/);
    const keys = context.keys();

    return keys;

}