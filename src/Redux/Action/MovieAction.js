import {
  getTrendingMoviesAPI,
  getTopRatedMoviesAPI,
  getPopularMoviesAPI,
  getSearchMoviesListAPI,
  getMoviesDetailAPI,
  getSimilarMoviesAPI,
  getMoviesCreditsAPI,
  getMoviesVideosAPI,
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

// Search Movies Detail
export const actionSearchMoviesListAPI = (page, keyWords) => {
  return async (dispatch) => {
    const res = await getSearchMoviesListAPI(page, keyWords);
    dispatch(actionSearchMoviesDetail(res.data.results));
  };
};

const actionSearchMoviesDetail = (moviesSearch) => {
  return {
    type: TYPES.SEARCH_MOVIES_LIST,
    payload: moviesSearch,
  };
};

// Get Movies Detail List
export const actionGetMoviesDetailAPI = (movieID) => {
  return async (dispatch) => {
    const res = await getMoviesDetailAPI(movieID);
    dispatch(actionGetMoviesDetail(res.data));
  };
};

const actionGetMoviesDetail = (moviesDetailListAPI) => {
  return {
    type: TYPES.GET_MOVIES_DETAIL,
    payload: moviesDetailListAPI,
  };
};

// Get Similar Movies
export const actionGetSimilarMoviesAPI = (movieID) => {
  return async (dispatch) => {
    const res = await getSimilarMoviesAPI(movieID);
    dispatch(actionGetSimilarMovies(res.data.results));
  };
};

const actionGetSimilarMovies = (similarMoviesList) => {
  return {
    type: TYPES.GET_SIMILAR_MOVIES,
    payload: similarMoviesList,
  };
};

// Get Movies Credits
export const actionMoviesCreditsAPI = (movieID) => {
  return async (dispatch) => {
    const res = await getMoviesCreditsAPI(movieID);
    dispatch(actionMoviesCredits(res.data.cast));
  };
};

const actionMoviesCredits = (moviesCredits) => {
  return {
    type: TYPES.GET_MOVIES_CREDITS,
    payload: moviesCredits,
  };
};

// Get Movies Videos
export const actionMoviesVideosAPI = (movieID) => {
  return async (dispatch) => {
    const res = await getMoviesVideosAPI(movieID);
    dispatch(actionMoviesVideos(res.data.results));
  };
};

const actionMoviesVideos = (moviesVideos) => {
  return {
    type: TYPES.GET_MOVIES_VIDEOS,
    payload: moviesVideos,
  };
};
