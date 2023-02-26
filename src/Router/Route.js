import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/LoginPage";
import Logout from "../Pages/LogoutPage";
import MoviePage from "../Pages/MoviePage";
import TicketPage from "../Pages/TicketPage";
import HomePage from "../Pages/HomePage";
import CinemaPage from "../Pages/CinemaPage";
import CommnityPage from "../Pages/CommnityPage";
import ArticlePage from "../Pages/ArticlePage";

const route = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="tickets" element={<TicketPage />}></Route>
        <Route path="movies" element={<MoviePage />}></Route>
        <Route path="cinemas" element={<CinemaPage />}></Route>
        <Route path="articles" element={<ArticlePage />}></Route>
        <Route path="community" element={<CommnityPage />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="logout" element={<Logout />}></Route>
      </Routes>
    </div>
  );
};

export default route;
