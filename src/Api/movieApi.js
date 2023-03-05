import { api } from "./api";

const getListMovieAPI = () => {
  return api("GET", "movies/showing", null);
};

export { getListMovieAPI };
