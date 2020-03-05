import React from "react";
import Panel from "./panel";

const Grid = props => {
  return (
    <div className="container-lg mx-4 mb-4">
      <div className="card-group col d-flex justify-content-center">
        {props.movies.map((movie, i) => {
          return (
            <Panel
              key={i}
              image={movie.poster_path}
              title={movie.original_title}
              name={movie.original_name}
              info={movie.overview}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
