import React, { useEffect } from "react";
import "./_home.scss";
import Header from "../../Component/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  actionFetchTopRatedMoviesListAPI,
  actionFetchTrendingMoviesListAPI,
} from "../../Redux/Action/MovieAction";
import Row from "../../Component/Home/Row";

function HomePage(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const trendingMoviesList = state.movieReducer.trendingMoviesList;
  const topRatedMoviesList = state.movieReducer.topRatedMoviesList;

  useEffect(() => {
    // Movies
    dispatch(actionFetchTrendingMoviesListAPI());
    dispatch(actionFetchTopRatedMoviesListAPI());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Header />
      <div className="home-rows">
        <Row list={trendingMoviesList} title="Trending Movies" path="movies" />
        <Row list={topRatedMoviesList} title="Top Rated Movies" path="movies" />
      </div>
    </React.Fragment>
  );
}

export default HomePage;
