import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import MovieReducer from "./MovieReducer";

const RootReducers = combineReducers({
  authReducer: AuthReducer,
  movieReducer: MovieReducer,
});

export default RootReducers;
