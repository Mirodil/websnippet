function Tag({ name, count }) {
    return (
        <h5>
            <a href={`tags/${name}`} title={name}>{name} ({count})</a>
        </h5>
    );
}
export default function TagList({ tags }) {
    return (
        <div className="widget panel panel-default">
            <div className="panel-heading">
                <h4>TAGS</h4>
            </div>
            <div className="panel-body">
                <nav>
                    {tags.map(tag => <Tag key={tag.name} {...tag} />)}
                </nav>
            </div>
        </div>
    );
}