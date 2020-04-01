import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import config from '../config';
import Layout from './components/Layout';
import load from '../store/load';
import Share from './components/Share';

const content = `
WebSnippet is a blog dedicated to share top quality open source resources for web developer, mobile apps developer and web designer daily. As a web designer, you’ll find some of the best free icons, stock photos, brushes, fonts and design inspirations. As mobile apps developer, you'll find some useful tools, code snippets, free icons and many more. As a web developer, you’ll also find web tricks, code snippets, some of the best JavaScript components like modal windows, menus, galleries, tooltips, charts plugins and a lot more …

Nowadays, there are over hundred thousands of resources available on the internet. Instead of spending time on researching for the ones you need, we pick the top quality and the best ones for you, so that you can concentrate on your web development.

The creator of WebSnippet is a web developer and designer who has a passion on web application development, mobile application development and web design.

We are welcome to any suggestion and contribution. Please feel free to contact us if you have found something you would like to share with others. Thank you for supporting WebSnippet.io
`;

export default function Contact({ categories, tags }) {
    return (
        <Layout categories={categories} tags={tags}>
            <Head>
                <title>About - Web Resources | {config.params.name}</title>
                <meta name="description" content="WebSnippet is a blog dedicated to share top quality open source resources for web developer and web designer daily." />
            </Head>
            <article class="post">
                <div class="page-header">
                    <h1>
                        <a href="/about" title="About">About</a>
                    </h1>
                </div>
                <div class="content">
                    <div class="entry-colors">
                        <div class="red"></div>
                        <div class="blue"></div>
                        <div class="gray"></div>
                    </div>
                    <div class="text-center">
                        <img src="https://3.bp.blogspot.com/-xf7QghPCVnA/Wg-RQkuEbNI/AAAAAAAAD1M/RpZJ34mQDP8aW3IeLDbOuR7s7dRCzyAhgCLcBGAs/s1600/cover.png" alt="About" class="image-head img-responsive" />
                    </div>
                    <div class="raw">
                        <ReactMarkdown source={content} />
                    </div>
                    <Share title="About" permalink="/about" />
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
