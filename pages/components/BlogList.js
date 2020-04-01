import Share from './Share';
import urlize from '../../utils/urlize';

import DateTime from './DateTime';

function Tag({ name, i, count }) {
    const addComma = (i) => i + 1 < count ? ', ' : '';
    return (
        <>
            <a href={`tags/${urlize(name)}`} title={name} rel="tag">{name}</a>
            {addComma(i)}
        </>
    );
}

function Tags({ tags }) {
    if (!tags || !tags.length) return null;
    const count = tags.length;
    return (
        <span>
            <i className="fa fa-tags" aria-hidden="true"></i>{' '}
            {tags.map((name, i) => <Tag key={name} name={name} i={i} count={count} />)}
        </span>
    );
}

function Blog({ title, description, date, tags, permalink, thumbnail }) {
    return (
        <article className="post">
            <div className="page-header">
                <h2>
                    <a href={permalink} title={title} rel="bookmark">
                        {title}
                    </a>
                </h2>
            </div>
            <div className="meta text-muted">
                <DateTime value={date} />
                <Tags tags={tags} />
                <span className="pull-right">
                    <i className="fa fa-comments"></i>{' '}
                    <a href={permalink} title={title}>0 comment</a>
                </span>
            </div>
            <div className="content">
                <div className="entry-colors">
                    <div className="red"></div>
                    <div className="blue"></div>
                    <div className="gray"></div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-4 text-center">
                        <img src={thumbnail || 'http://placehold.it/200x150'} alt={title} />
                    </div>
                    <div className="col-xs-12 col-md-8">
                        {description}
                    </div>
                    <div className="col-md-12 clearfix">
                        <a href={permalink} className="more pull-right">Continue reading &rarr;</a>
                    </div>
                </div>
                <Share title={title} permalink={permalink} />
            </div>
        </article >
    );
}

export default function BlogList({ posts }) {
    return (
        <>
            {posts.map(post => <Blog key={post.slug} {...post} />)}
        </>
    );
}