import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Nav, NavItem, Navbar } from "reactstrap";

function Menu() {
  const navigate = useNavigate();

  const [user, setUser] = useState("");

  const accesToken = localStorage.getItem("accessToken");
  // chuyển tới trang Login
  const handleLogin = () => {
    navigate("/login");
  };

  // chuyển tới trang Sigup
  const handleSignup = () => {
    navigate("/signup");
  };

  // chuyển tới trang Home
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  return (
    <div>
      <Navbar>
        <NavLink to="/" className="navbar-brand">
          MCinema
        </NavLink>
        <Nav className="me-auto col-7">
          <NavItem>
            <NavLink to="/tickets" className="nav-link">
              Tickets
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/movies" className="nav-link">
              Movies
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/cinemas" className="nav-link">
              TV Shows
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/articles" className="nav-link">
              Articles
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/community" className="nav-link">
              Community
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="me-auto">
          {accesToken ? (
            <>
              <div className="navbar-user">Hi,{user}</div>
              <button className="btn-logout" onClick={() => handleLogout()}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="btn-login" onClick={() => handleLogin()}>
                Login
              </button>
              <button className="btn-signup" onClick={() => handleSignup()}>
                Signup
              </button>
            </>
          )}
        </Nav>
      </Navbar>
    </div>
  );
}

export default Menu;
