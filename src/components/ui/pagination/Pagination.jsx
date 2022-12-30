import React from 'react';

const Pagination = ({pages, page, setPage}) => {

    return (
        <div className="page__wrapper">
            {pages.map(p =>
                <span
                    onClick={() => setPage(p)}
                    key={p} className={page === p ? "page pageCurrent" : "page"}>{p}</span>
            )}
        </div>
    );
};

export default Pagination;