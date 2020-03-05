import React, { Component } from "react";

const Pagination = props => {
  const pageLinks = [];

  for (let i = 1; i <= props.pages + 1; i++) {
    let active = props.currentPage === i ? "active" : "";

    pageLinks.push(
      <li
        className={`page-item ${active}`}
        key={i}
        onClick={() => props.nextPage(i)}
      >
        <a className="page-link" href="#">
          {i}
        </a>
      </li>
    );
  }
  console.log("PAGINATION SHOW");
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center  m-5">{pageLinks}</ul>
    </nav>
  );
};

export default Pagination;
