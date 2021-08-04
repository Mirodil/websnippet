export default function SubscribeForm() {
    const onSubmit = () => {
        window.open('https://feedburner.google.com/fb/a/mailverify?uri=WebSnippet', 'popupwindow', 'scrollbars=yes,width=550,height=520');
        return true;
    };

    return (
        <div className="widget panel panel-default">
            <div className="panel-heading">
                <h4>
                    Follow Us
            <span className="social pull-right">
                        <a href="https://www.facebook.com/websnippet.io" title="facebook" rel="nofollow" target="_blank" className="nodecoration">
                            <i className="fa fa-facebook" aria-hidden></i>
                            <span className="sr-only">facebook</span>
                        </a>
                        <a href="https://twitter.com/WebSnippetio" title="twitter" rel="nofollow" target="_blank" className="nodecoration">
                            <i className="fa fa-twitter" aria-hidden></i>
                            <span className="sr-only">twitter</span>
                        </a>
                        <a href="https://plus.google.com/109007174257357268166" title="google+" rel="nofollow" target="_blank" className="nodecoration">
                            <i className="fa fa-google-plus" aria-hidden></i>
                            <span className="sr-only">google+</span>
                        </a>
                        <a href="http://feeds2.feedburner.com/WebSnippet" title="rss" target="_blank" className="nodecoration">
                            <i className="fa fa-rss" aria-hidden></i>
                            <span className="sr-only">rss</span>
                        </a>
                    </span>
                </h4>
            </div>
            <div className="panel-body">
                <form action="https://feedburner.google.com/fb/a/mailverify" method="post" target="popupwindow" onSubmit={onSubmit}>
                    <input type="hidden" value="WebSnippet" name="uri" />
                    <input type="hidden" name="loc" value="en_US" />
                    <div className="form-group">
                        <label className="sr-only" htmlFor="subemail">Enter your email address</label>
                        <div className="input-group">
                            <input type="text" id="subemail" name="email" className="form-control" placeholder="Your email address..." />
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="submit" aria-label="Subscribe">
                                    <i className="fa fa-fire" aria-hidden></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
