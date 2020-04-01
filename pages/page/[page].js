import Head from 'next/head';
import config from '../../config';
import load from '../../store/load';
import Layout from '../components/Layout';
import BlogList from '../components/BlogList';
import Pagination from '../components/Pagination';

export default function Page({ categories, tags, posts, paginator }) {
    return (
        <Layout categories={categories} tags={tags}>
            <Head>
                <title>{config.title} - Web Resources | {config.params.name}</title>
            </Head>
            <BlogList posts={posts} />
            <hr />
            <Pagination {...paginator} base="/" />
        </Layout>
    );
}

export async function getStaticProps({ params }) {
    const data = load({ page: parseInt(params.page) });
    return {
        props: { ...data }
    };
}

export async function getStaticPaths() {
    const { paginator } = load({ page: 1 });
    const { total } = paginator;
    const path = Array(total).fill(null).map((_, i) => `/page/${i + 1}`);

    return {
        paths: path,
        fallback: false
    };
}