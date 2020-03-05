import React from "react";

const Search = props => {
  return (
    <form
      className="form-inline mx-4 justify-content-end"
      onSubmit={props.handleSubmit}
    >
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search Movies"
        aria-label="Search"
        onChange={props.handleChange}
      />
      <button
        className="btn btn-outline-success my-2 my-sm-0"
        onClick={props.handleSubmit}
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
