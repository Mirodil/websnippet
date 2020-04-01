
export default function Head(props) {
    return (
        <head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" />
            {/* <title> {{ .Title }} - Web Resources | {{ .Site.Params.Name }} </title> */}
            {/* {{ with .Site.Params.description }}<meta name="description" content="{{ . }}">{{ end }} */}
            {/* {{ .Hugo.Generator }} */}
            {/* {{ if .Site.Params.opengraph }}{{ template "_internal/opengraph.html" . }}{{ end }} */}
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
            <link rel="stylesheet" href="https://use.fontawesome.com/c7d199424f.css" />
            <link rel="stylesheet" href="css/styles.css" type="text/css" media="all" />
            <link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="http://feeds2.feedburner.com/WebSnippet" />
            {/* <link href="{{ .RSSLink }}" rel="alternate" type="application/rss+xml" title="{{ .Site.Title }}" />
            <link href="{{ .RSSLink }}" rel="feed" type="application/rss+xml" title="{{ .Site.Title }}" /> */}
        </head>
    );
}