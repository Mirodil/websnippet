import Head from 'next/head';
import config from '../config';
import Layout from '../components/Layout';
import load from '../store/load';
import BlogList from '../components/BlogList';
import Pagination from '../components/Pagination';

export default function Index({ categories, tags, posts, paginator }) {
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

export async function getStaticProps(ctx) {
    const data = load({ page: 1 });
    return {
        props: { ...data }, // will be passed to the page component as props
    };
}
