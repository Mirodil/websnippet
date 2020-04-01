import matter from 'gray-matter';
import config from '../config';

function strCompare(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
}

function filterCategories(posts) {
    const map = {};
    for (const post of posts) {
        (post.categories || []).forEach(category => {
            map[category] = (map[category] || 1) + 1;
        });
    }

    const list = Object.keys(map).map(name => ({ name, count: map[name] }));
    list.sort(strCompare);
    return list;
}

function filterTag(posts) {
    const map = {};
    for (const post of posts) {
        (post.tags || []).forEach(tag => {
            map[tag] = (map[tag] || 1) + 1;
        });
    }
    const list = Object.keys(map).map(name => ({ name, count: map[name] }));
    list.sort(strCompare);
    return list;
}

export default function load({ page = 1 }) {
    const paginate = parseInt(config.paginate);
    const context = require.context('../posts', true, /\.md$/);

    const keys = context.keys();
    const values = keys.map(context);

    const posts = keys
        .map((key, index) => {
            const value = values[index];
            const post = matter(value.default);
            return { ...post.data, permalink: `/post/${post.data.slug}` };
        })
        .filter(p => Date.parse(p.date) <= Date.now())
        .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

    const categories = filterCategories(posts);
    const tags = filterTag(posts);
    const paginator = {
        page,
        total: Math.ceil(posts.length / paginate),
        start: (page - 1) * paginate
    };

    return {
        categories,
        tags,
        paginator,
        posts: posts.slice(paginator.start, paginator.start + paginate)
    };
}