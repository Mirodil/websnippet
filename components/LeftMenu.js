export default function LeftMenu() {
    return (
        <header>
            <div className="logo">
                <a href="/">
                    Web <span className="text-danger">{'{'}</span><span className="snippet">Snippet</span><span className="text-danger">{'}'}</span>
                </a>
            </div>
            <hr />
            <div className="social">
                <a href="https://www.facebook.com/websnippet.io" title="facebook" rel="nofollow">
                    <i className="fa fa-facebook" aria-hidden></i>
                    <span className="sr-only">facebook</span>
                </a>
                <a href="https://twitter.com/WebSnippetio" title="twitter" rel="nofollow">
                    <i className="fa fa-twitter" aria-hidden></i>
                    <span className="sr-only">twitter</span>
                </a>
                <a href="https://plus.google.com/109007174257357268166" title="google+" rel="nofollow">
                    <i className="fa fa-google-plus" aria-hidden></i>
                    <span className="sr-only">google+</span>
                </a>
                <a href="http://feeds2.feedburner.com/WebSnippet" title="rss">
                    <i className="fa fa-rss" aria-hidden></i>
                    <span className="sr-only">rss</span>
                </a>
            </div>
            <hr />
            <ul className="nav nav-stacked">
                <li role="presentation"><a href="/" title="">Home</a></li>
                <li role="presentation"><a href="/tools-and-resources" title="Tools and Resources">Tools &amp; Resources</a></li>
                <li role="presentation"><a href="/about" title="About">About</a></li >
                <li role="presentation"><a href="/contact" title="Support">Support</a></li >
                <li role="presentation"><a href="/contact" title="Contacts">Contacts</a></li >
            </ul >
        </header >
    );
}
