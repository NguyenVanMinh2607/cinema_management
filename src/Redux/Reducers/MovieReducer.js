import * as TYPES from "../Contants/ActionType";

const initialState = {
  trendingMoviesList: {},
  topRatedMoviesList: {},
  popularMoviesList: {},
  moviesSearchList: {},
  moviesDetail: {},
  similarMoviesList: {},
  moviesVideos: {},
  moviesCredits: {},
};

const MovieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPES.GET_TRENDING_MOVIES:
      return { ...state, trendingMoviesList: payload };

    case TYPES.GET_TOP_RATED_MOVIES:
      return { ...state, topRatedMoviesList: payload };

    case TYPES.GET_POPULAR_MOVIES:
      return { ...state, popularMoviesList: payload };

    case TYPES.SEARCH_MOVIES_LIST:
      return { ...state, moviesSearchList: action.payload };

    case TYPES.GET_MOVIES_DETAIL:
      return { ...state, moviesDetail: action.payload };

    case TYPES.GET_SIMILAR_MOVIES:
      return { ...state, similarMoviesList: action.payload };

    case TYPES.GET_MOVIES_VIDEOS:
      return { ...state, moviesVideos: action.payload };

    case TYPES.GET_MOVIES_CREDITS:
      return { ...state, moviesCredits: action.payload };

    default:
      return state;
  }
};

export default MovieReducer;
