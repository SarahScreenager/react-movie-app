import React from "react";
import logoFilm from "../logoFilm.png";
import "./panel.css";

const Panel = props => {
  return (
    <div className="">
      <div className="card text-white h-100" style={{ width: 340 }}>
        {props.image == null ? (
          <img
            src={logoFilm}
            className="card-img-top mx-auto"
            alt="card"
            style={{ height: 510, width: 340 }}
          />
        ) : (
          <img
            src={`http://image.tmdb.org/t/p/w500${props.image}`}
            className="card-img-top"
            alt="card"
            style={{ height: 510, width: 340 }}
          />
        )}
        <div className="card-img-overlay h-100 ovl" style={{ width: 340 }}>
          <h5 className="card-title">{props.title} </h5>
          <div className="card-body">
            <div className="card-text info-block">{props.info}</div>
          </div>
          <div className="card-footer">
            <a
              href={`https://www.google.com/search?q=${
                props.title == null ? props.name : props.title
              }`}
              className="btn btn-primary"
            >
              {props.title == null ? props.name : props.title}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
