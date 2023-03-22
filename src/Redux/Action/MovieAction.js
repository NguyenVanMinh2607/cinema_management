import {
  getMoviesDetail,
  getPopularMoviesAPI,
  getTopRatedMoviesAPI,
  getTrendingMoviesAPI,
} from "../../Api/movieApi";
import * as TYPES from "../Contants/ActionType";

// Trending Movies
export const actionFetchTrendingMoviesListAPI = () => {
  return async (dispatch) => {
    const res = await getTrendingMoviesAPI();
    dispatch(actionFetchTrendingMoviesList(res.data.results));
  };
};

const actionFetchTrendingMoviesList = (trendingMoviesListAPI) => {
  return {
    type: TYPES.GET_TRENDING_MOVIES,
    payload: trendingMoviesListAPI,
  };
};

// Top rated Movies
export const actionFetchTopRatedMoviesListAPI = () => {
  return async (dispatch) => {
    const res = await getTopRatedMoviesAPI();
    dispatch(actionFetchTopRatedMoviesList(res.data.results));
  };
};

const actionFetchTopRatedMoviesList = (topRatedMoviesListAPI) => {
  return {
    type: TYPES.GET_TOP_RATED_MOVIES,
    payload: topRatedMoviesListAPI,
  };
};

// Popular Movies
export const actionFetchPopularMoviesListAPI = (page) => {
  return async (dispatch) => {
    const res = await getPopularMoviesAPI(page);
    dispatch(actionFetchPopularMoviesList(res.data.results));
  };
};

const actionFetchPopularMoviesList = (popularMoviesListAPI) => {
  return {
    type: TYPES.GET_POPULAR_MOVIES,
    payload: popularMoviesListAPI,
  };
};

// Get Movies Detail List
export const actionGetMoviesDetailListAPI = (movieID) => {
  return async (dispatch) => {
    const res = await getMoviesDetail(movieID);
    dispatch(actionGetMoviesDetailList(res.data));
  };
};

const actionGetMoviesDetailList = (moviesDetailListAPI) => {
  return {
    type: TYPES.GET_MOVIES_DETAIL,
    payload: moviesDetailListAPI,
  };
};
