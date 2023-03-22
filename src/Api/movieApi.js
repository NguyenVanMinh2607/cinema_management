import { API_KEY, api } from "./api";

const getTrendingMoviesAPI = () => {
  return api("GET", `trending/movie/day?api_key=${API_KEY}`, null);
};

const getTopRatedMoviesAPI = () => {
  return api("GET", `movie/top_rated?api_key=${API_KEY}&page=1`, null);
};

const getPopularMoviesAPI = (page) => {
  return api("GET", `movie/popular?api_key=${API_KEY}&page=${page}`, null);
};

const getSearchMoviesList = (page, keyWords) => {
  return api(
    "GET",
    `search/movie?api_key=${API_KEY}&page=${page}&query=${keyWords}`,
    null
  );
};

const getMoviesDetail = (movieID) => {
  return api("GET", `movie/${movieID}?api_key=${API_KEY}`, null);
};

const getMoviesVideos = (movieID) => {
  return api("GET", `movie/${movieID}/videos?api_key=${API_KEY}`, null);
};

export {
  getTrendingMoviesAPI,
  getTopRatedMoviesAPI,
  getPopularMoviesAPI,
  getSearchMoviesList,
  getMoviesDetail,
  getMoviesVideos,
};
