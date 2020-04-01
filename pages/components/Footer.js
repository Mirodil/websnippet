export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="text-center social">
                    <a href="mailto:hello@websnippet.io" title="email" rel="nofollow">
                        <i className="fa fa-envelope" aria-hidden></i>
                        <span className="sr-only">email</span>
                    </a>
                    <a href="https://www.facebook.com/websnippet.io" title="facebook" rel="nofollow" target="_blank">
                        <i className="fa fa-facebook" aria-hidden></i>
                        <span className="sr-only">facebook</span>
                    </a>
                    <a href="https://twitter.com/WebSnippetio" title="twitter" rel="nofollow" target="_blank">
                        <i className="fa fa-twitter" aria-hidden></i>
                        <span className="sr-only">twitter</span>
                    </a>
                    <a href="https://plus.google.com/109007174257357268166" title="google+" rel="nofollow" target="_blank">
                        <i className="fa fa-google-plus" aria-hidden></i>
                        <span className="sr-only">google+</span>
                    </a>
                    <a href="http://feeds2.feedburner.com/WebSnippet" title="rss" target="_blank">
                        <i className="fa fa-rss" aria-hidden></i>
                        <span className="sr-only">rss</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
