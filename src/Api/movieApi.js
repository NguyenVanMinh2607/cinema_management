import { API_KEY, api } from "./api";

export const getTrendingMoviesAPI = () => {
  return api("GET", `trending/movie/day?api_key=${API_KEY}`, null);
};

export const getTopRatedMoviesAPI = () => {
  return api("GET", `movie/top_rated?api_key=${API_KEY}&page=1`, null);
};

export const getPopularMoviesAPI = (page) => {
  return api("GET", `movie/popular?api_key=${API_KEY}&page=${page}`, null);
};

export const getSearchMoviesListAPI = (page, keyWords) => {
  return api(
    "GET",
    `search/movie?api_key=${API_KEY}&page=${page}&query=${keyWords}`,
    null
  );
};

export const getMoviesDetailAPI = (movieID) => {
  return api("GET", `movie/${movieID}?api_key=${API_KEY}`, null);
};

export const getSimilarMoviesAPI = (movieID) => {
  return api("GET", `movie/${movieID}/similar?api_key=${API_KEY}&page=1`, null);
};

export const getMoviesCreditsAPI = (movieID) => {
  return api("GET", `movie/${movieID}/credits?api_key=${API_KEY}`, null);
};

export const getMoviesVideosAPI = (movieID) => {
  return api("GET", `movie/${movieID}/videos?api_key=${API_KEY}`, null);
};
