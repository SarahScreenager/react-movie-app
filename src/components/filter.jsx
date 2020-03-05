import React, { Component } from "react";

const Filter = props => {
  return (
    <div class="d-flex justify-content-center m-3">
      <div
        class="dropdown"
        role="group"
        aria-label="Button group with nested dropdown"
      >
        <div class="btn-group" role="group">
          <button
            id="btnGroupDrop1"
            type="button"
            class="btn btn-secondary dropdown-toggle m-1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            TV
          </button>
          <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <a class="dropdown-item" href="#" onClick={props.handlePopTv}>
              Most Popular TV
            </a>
            <a class="dropdown-item" href="#" onClick={props.handleRatedTv}>
              Top Rated TV
            </a>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-secondary m-1"
          onClick={props.handlePopTv}
        >
          Most Popular TV
        </button>
        <button
          type="button"
          class="btn btn-secondary m-1"
          onClick={props.handleRatedTv}
        >
          Top Rated TV
        </button>
        <button
          type="button"
          class="btn btn-secondary m-1"
          onClick={props.handlePopFilm}
        >
          Most Popular Film
        </button>
        <button
          type="button"
          class="btn btn-secondary m-1"
          onClick={props.handleRatedFilm}
        >
          Top Rated Film
        </button>
        <button
          type="button"
          class="btn btn-secondary m-1"
          onClick={props.handleToWatchList}
        >
          Watch List
        </button>
      </div>
    </div>
  );
};

export default Filter;
