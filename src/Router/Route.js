import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Users/LoginPage";
import Signup from "../Pages/Users/SignupPage";
import MoviePage from "../Pages/Movies/Movie";
import TicketPage from "../Pages/TicketPage";
import HomePage from "../Pages/Home/Home";
import CommnityPage from "../Pages/CommnityPage";
import ArticlePage from "../Pages/ArticlePage";
import TvShow from "../Pages/TVShow/TvShow";
import MoviesItem from "../Pages/Movies/MoviesItem";

const route = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="tickets" element={<TicketPage />}></Route>
        <Route path="movies" element={<MoviePage />}></Route>
        <Route path="/movies/:id" element={<MoviesItem />} />
        <Route path="tv-shows" element={<TvShow />}></Route>
        <Route path="articles" element={<ArticlePage />}></Route>
        <Route path="community" element={<CommnityPage />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
};

export default route;
