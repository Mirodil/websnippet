import Document, { Html, Head, Main, NextScript } from 'next/document';
import config from '../config.json';
// import Head from './components/Head';
import Footer from '../components/Footer';

const fontawesome = `
/*!
 *  Font Awesome v4.7.0 by @davegandy - http://fontawesome.io - @fontawesome
 *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
 */
@import url('//use.fontawesome.com/releases/v4.7.0/css/font-awesome-css.min.css');
@font-face {
  font-family: 'FontAwesome';
  src: url('//use.fontawesome.com/releases/v4.7.0/fonts/fontawesome-webfont.eot');
  src: url('//use.fontawesome.com/releases/v4.7.0/fonts/fontawesome-webfont.eot?#iefix') format('embedded-opentype'),
       url('//use.fontawesome.com/releases/v4.7.0/fonts/fontawesome-webfont.woff2') format('woff2'),
       url('//use.fontawesome.com/releases/v4.7.0/fonts/fontawesome-webfont.woff') format('woff'),
       url('//use.fontawesome.com/releases/v4.7.0/fonts/fontawesome-webfont.ttf') format('truetype'),
       url('//use.fontawesome.com/releases/v4.7.0/fonts/fontawesome-webfont.svg#fontawesomeregular') format('svg');
  font-weight: normal;
  font-style: normal;
}
`

class WebSnippet extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang={config.languageCode}>
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    {/* <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" /> */}
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <link rel="apple-touch-icon" sizes="57x57" href="/images/apple-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="/images/apple-icon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="/images/apple-icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="/images/apple-icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="/images/apple-icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="/images/apple-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="/images/apple-icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/images/apple-icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-icon-180x180.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="/images/android-icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
                    <style type="text/css" dangerouslySetInnerHTML={{ __html: fontawesome }}></style>
                    <link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="http://feeds2.feedburner.com/WebSnippet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <Footer />
                </body>
            </Html>
        )
    }
}

export default WebSnippet;
