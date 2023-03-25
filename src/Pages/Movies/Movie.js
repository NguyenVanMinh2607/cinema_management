import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import "./_movies.scss";
import { useDispatch, useSelector } from "react-redux";
import MoviesCards from "../../Pages/Movies/MoviesCards";
import Search from "../../Component/search/Search";
import Header from "../../Component/Header/Header";
import {
  actionFetchPopularMoviesListAPI,
  actionGetMoviesDetailAPI,
  actionGetSimilarMoviesAPI,
  actionMoviesCreditsAPI,
  actionMoviesVideosAPI,
  actionSearchMoviesListAPI,
} from "../../Redux/Action/MovieAction";

function MoviePage(props) {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const moviesSearchList = state.movieReducer.moviesSearchList;
  const popularMoviesList = state.movieReducer.popularMoviesList;

  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [searchKeyWords, setSearchKeyWords] = useState("");

  const onHandlePageClick = (e) => {
    console.log(e.selected + 1);
    setList(popularMoviesList);
    setSearchList(moviesSearchList);
    setPage(e.selected + 1);
  };
  const onHandleMovies = (item) => {
    dispatch(actionGetMoviesDetailAPI(item.id));
    dispatch(actionGetSimilarMoviesAPI(item.id));
    dispatch(actionMoviesVideosAPI(item.id));
    dispatch(actionMoviesCreditsAPI(item.id));
  };

  useEffect(() => {
    dispatch(actionFetchPopularMoviesListAPI(page));
    if (searchKeyWords)
      dispatch(actionSearchMoviesListAPI(page, searchKeyWords));
  }, [dispatch, page, searchKeyWords]);

  return (
    <div className="movies">
      <Header />
      <div className="movies-content">
        <div className="movies-content-wrapper">
          <div className="movies-content-search">
            <input
              type="text"
              className="movies-content-search-input"
              placeholder="Search your interesting..."
              onChange={(e) => setSearchKeyWords(e.target.value)}
              value={searchKeyWords}
            />
            <HiOutlineSearch className="movies-content-search-icon"></HiOutlineSearch>
          </div>
          <div className="movies-content-detail">
            {moviesSearchList.length > 0 || searchKeyWords.length > 0 ? (
              <Search
                searchList={searchList ? moviesSearchList : searchList}
                searchKeyWords={searchKeyWords}
                path="movies"
                onHandle={onHandleMovies}
                onHandlePageClick={onHandlePageClick}
              />
            ) : (
              <MoviesCards
                list={list ? popularMoviesList : list}
                onHandleMovies={onHandleMovies}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
