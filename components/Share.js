export default function Share({ title, permalink }) {
    return (
        <ul className="share">
            <li className="presentation">Share this:</li>
            <li className="presentation">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${permalink}`} target="_blank" rel="nofollow" title={title}>
                    <i className="fa fa-facebook"></i> <span className="hidden-xs">Facebook</span>
                </a>
            </li>
            <li className="presentation">
                <a href={`https://twitter.com/home?status=${title}+${permalink}`} target="_blank" rel="nofollow" title={title}>
                    <i className="fa fa-twitter"></i> <span className="hidden-xs">Twitter</span>
                </a>
            </li>
            <li className="presentation">
                <a href={`https://plus.google.com/share?url=${permalink}`} target="_blank" rel="nofollow" title={title}>
                    <i className="fa fa-google-plus"></i> <span className="hidden-xs">Google+</span>
                </a>
            </li>
            <li className="presentation">
                <a href={`http://www.stumbleupon.com/submit?url=${permalink}&amp;title=${title}`} target="_blank" rel="nofollow" title={title}>
                    <i className="fa fa-stumbleupon"></i> <span className="hidden-xs">Stumble</span>
                </a>
            </li>
            <li className="presentation">
                <a href={`http://digg.com/submit?url=${permalink}&amp;title=${title}`} target="_blank" rel="nofollow" title={title}>
                    <i className="fa fa-digg"></i> <span className="hidden-xs">Digg</span>
                </a>
            </li>
        </ul>
    );
}
