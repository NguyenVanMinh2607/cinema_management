import React, { useEffect, useState } from "react";
import "./style.scss";
import MovieComponent from "../Conponent/Movies/MovieComponent";
import Content from "../Conponent/Movies/Content";
import { getListMovieAPI } from "../Api/movieApi";

function MovieContainer(props) {
  const [movieList, setMovieList] = useState([]);

  const fetchMovieList = () => {
    getListMovieAPI()
      .then((response) => {
        setMovieList(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(movieList);
  useEffect(() => {
    fetchMovieList();
  }, []);
  return (
    <>
      <Content />
      <div className="movieListContainer">
        {movieList.map((movie, index) => (
          <MovieComponent key={index} movie={movie} />
        ))}
      </div>
    </>
  );
}
export default MovieContainer;
