import Head from 'next/head';
import config from '../../../../config';
import load from '../../../../store/load';
import Layout from '../../../../components/Layout';
import BlogList from '../../../../components/BlogList';
import Pagination from '../../../../components/Pagination';

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
    params.page = parseInt(params.page);
    const data = load(params);

    return {
        props: { ...data, ...params }
    };
}

export async function getStaticPaths(ctx) {
    const { categories } = load({ page: 1 });
    const paginate = parseInt(config.paginate);

    const paths = categories
        .map(category => {
            const baseURL = `/categories/${category.name.toLocaleLowerCase()}`;
            const totalPages = Math.ceil(category.count / paginate);
            return Array(totalPages)
                .fill(null)
                .map((_, i) => `${baseURL}/page/${i + 1}`);
        })
        .flat();

    return {
        paths,
        fallback: false
    };
}