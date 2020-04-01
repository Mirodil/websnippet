
function Category({ name, count }) {
    return (
        <h5>
            <a href={`categories/${name}`} title={name}>
                {name} ({count})
            </a>
        </h5>
    );
}

export default function Categories({ categories }) {
    return (
        <div className="widget panel panel-default">
            <div className="panel-heading">
                <h4>CATEGORIES</h4>
            </div>
            <div className="panel-body">
                <nav>
                    {categories.map(cat => <Category key={cat.name} {...cat} />)}
                </nav>
            </div>
        </div >
    );
}
