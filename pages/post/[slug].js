import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout';
import slugs from '../../store/slugs';
import load from '../../store/load';
import DateTime from '../components/DateTime';
import Share from '../components/Share';

function Category({ name, i, count }) {
    const addComma = (i) => i + 1 < count ? ', ' : '';
    return (
        <>
            <a href={`categories/${name}`} title={name} rel="category">
                <strong>{name}</strong>
            </a>
            {addComma(i)}
        </>
    );
}

function Categories({ categories }) {
    if (!categories || !categories.length) return null;
    const count = categories.length;
    return (
        <span>
            <i class="fa fa-bookmark"></i>{' '}
            {categories.map((name, i) => <Category key={name} name={name} i={i} count={count} />)}
        </span>
    );
}

function PostSource({ value }) {
    if (!value) return null;
    return (
        <div class="alert alert-warning">
            <p class="lead">
                <strong>Read more:</strong>
                <a href={value} target="_blank" rel="nofollow">{value}</a>
            </p>
        </div>
    );
}

export default function Post({ site, title, permalink, content, date, categories, tags, image, source }) {
    return (
        <Layout categories={site.categories} tags={site.tags}>
            <article class="post">
                <div class="page-header">
                    <h1>
                        <a href={permalink} title={title}>
                            {title}
                        </a>
                    </h1>
                </div>
                <div class="meta text-muted">
                    <DateTime value={date} />
                    <Categories categories={categories} />
                    <span class="pull-right">
                        <i class="fa fa-comments"></i>{' '}
                        <a href={permalink} title={title}>0 comment</a>
                    </span>
                </div>
                <div class="content">
                    <div class="entry-colors">
                        <div class="red"></div>
                        <div class="blue"></div>
                        <div class="gray"></div>
                    </div>
                    <div class="text-center">
                        {image && <img src={image} alt={title} class="image-head img-responsive" />}
                    </div>
                    <div class="raw">
                        <ReactMarkdown source={content} />
                    </div>
                    <PostSource value={source} />
                    <Share title={title} permalink={permalink} />
                </div>
            </article>
        </Layout>
    );
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const content = await import(`../../posts/${slug}.md`);
    const post = matter(content.default);
    const { categories, tags } = load({ page: 1 });
    console.log(post.data);
    return {
        props: {
            ...post.data,
            content: post.content,
            permalink: `/post/${post.data.slug}`,
            site: {
                categories,
                tags
            }
        }
    }
}

export function getStaticPaths(ctx) {

    const paths = slugs().map(slug => {
        slug = slug.replace('.md', '').replace('./', '');
        return `/post/${slug}`;
    });

    return {
        paths: paths,
        fallback: false
    };
}