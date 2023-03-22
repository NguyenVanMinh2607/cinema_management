import * as TYPES from "../Contants/ActionType";

const initialState = {
  trendingMoviesList: {},
  topRatedMoviesList: {},
  popularMoviesList: {},
  moviesDetail: {},
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

    case TYPES.GET_MOVIES_DETAIL:
      return { ...state, moviesDetail: payload };
    default:
      return state;
  }
};

export default MovieReducer;
