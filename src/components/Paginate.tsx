import React from "react";

const Paginate = ({
  postsPerPage,
  totalPosts,
  paginate,
}: {
  postsPerPage: number;
  totalPosts: number;
  paginate: (page:number) => void
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="page-container">
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className="page-item">
            <a href="/#" className="page-link" onClick={() => paginate(pageNumber)}>{pageNumber}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginate;
