import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import config from '../config';
import Layout from './components/Layout';
import load from '../store/load';
import Share from './components/Share';



export default function ToolsAndResources({ categories, tags }) {
    return (
        <Layout categories={categories} tags={tags}>
            <Head>
                <title>Tools and Resources - Web Resources | {config.params.name}</title>
                <meta name="description" content="A curated list of tools and resources for people who make websites" />
            </Head>
            <article class="post">
                <div class="page-header">
                    <h1>
                        <a href="/tools-and-resources" title="Tools and Resources">Tools and Resources</a>
                    </h1>
                </div>
                <div class="content">
                    <div class="entry-colors">
                        <div class="red"></div>
                        <div class="blue"></div>
                        <div class="gray"></div>
                    </div>
                    <div class="text-center">
                        
                    </div>
                    <div class="raw">
                        
                    </div>
                    <Share title="Tools and Resources" permalink="/about" />
                </div>
            </article>
        </Layout>
    );
}

export async function getStaticProps(ctx) {
    const data = load({ page: 1 });
    return {
        props: { ...data }, // will be passed to the page component as props
    };
}
