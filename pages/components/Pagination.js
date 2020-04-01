function url(page, base = '/') {
    if (page === 1) {
        return '/';
    }
    return `/page/${page}`;
}

export default function Pagination({ page, total, base = '/' }) {
    let prev = (
        <li key="previous">
            <a href={url(page-1, base)} aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
        </li>
    );
    if (page === 1) {
        prev = (
            <li key="previous" className="disabled">
                <span aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </span>
            </li>
        );
    }
    let next = (
        <li>
            <a href={url(page + 1, base)} aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </a>
        </li>
    );
    if (page === total) {
        next = (
            <li className="disabled">
                <span aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </span>
            </li>
        );
    }

    const pagers = Array(total).fill(null).map((_, pageNumber) => {
        pageNumber += 1;
        if (pageNumber === page) {
            return (
                <li key={pageNumber} className="active">
                    <a href={url(pageNumber, base)}>
                        {pageNumber} <span className="sr-only">(current)</span>
                    </a>
                </li>
            );
        }
        return (
            <li key={pageNumber}>
                <a href={url(pageNumber, base)}>{pageNumber}</a>
            </li>
        );
    });

    return (
        <nav aria-label="Page navigation" className="text-center">
            <ul className="pagination">
                {prev}
                {pagers}
                {next}
            </ul>
        </nav>
    );
}
