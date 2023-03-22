import React from "react";
import "./MovieComponent.scss";

function MovieComponent(props) {
  const { movie } = props;

  return (
    <div>
      <div className="container">
        <img
          className="çover-image"
          alt="MoiveImage"
          src={movie.smallImageURl}
        ></img>
        <div className="movie-name">{movie.name}</div>
        <div className="info-column">
          <div className="movie-info">{movie.releaseDate}</div>
          <div className="movie-info">{movie.categories}</div>
        </div>
      </div>
    </div>
  );
}

export default MovieComponent;
