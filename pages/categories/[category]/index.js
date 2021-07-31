import Head from 'next/head';
import config from '../../../config';
import load from '../../../store/load';
import Layout from '../../../components/Layout';
import BlogList from '../../../components/BlogList';
import Pagination from '../../../components/Pagination';

export default function Page({ categories, tags, posts, paginator, category }) {
    return (
        <Layout categories={categories} tags={tags}>
            <Head>
                <title>{config.title} - Web Resources | {config.params.name}</title>
            </Head>
            <BlogList posts={posts} />
            <hr />
            <Pagination {...paginator} base={`/categories/${category}`} />
        </Layout>
    );
}

export async function getStaticProps({ params }) {
    const data = load(params);
    return {
        props: { ...data, ...params }
    };
}

export async function getStaticPaths(ctx) {
    const { categories } = load({ page: 1 });
    const paths = categories
        .map(category => `/categories/${category.name.toLocaleLowerCase()}`);

    return {
        paths,
        fallback: false
    };
}