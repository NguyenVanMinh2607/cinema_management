import React, { useState } from "react";
import { Button, Form, Input } from "reactstrap";
import "./Login.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { loginApi } from "./../../Api/authApi";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleClickLoginButton = () => {
    navigate("/movies");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = {
      email: email,
      password: password,
    };

    loginApi(raw)
      .then((response) => {
        localStorage.setItem("accessToken", response.accessToken);
        handleClickLoginButton();
      })
      .catch((error) => {
        console.log("error", error);
        alert("Email, password are wrong");
      });
  };

  return (
    <div className="login-container col-4 mx-auto">
      <div className="title ">MCinema</div>
      <div className="content-form">
        <Form onSubmit={handleLogin} className="form-group">
          <Input
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          ></Input>
          <Input
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          ></Input>
          <Button check="true" className="login-btn">
            Log in
          </Button>
        </Form>
        <div>
          <p className="log-in-with">
            <AiFillFacebook /> Log in with Facebook{" "}
          </p>
          <p className="forgot-pass">Forgot password?</p>
        </div>
      </div>
      <div className="content-text">
        Don't have an account?{" "}
        <NavLink to="/signup" className="text-signup">
          Sign up
        </NavLink>
      </div>
      <div className="footer">
        Get the app
        <div className="app-icon">
          <span>
            <img
              alt="apple-img"
              src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png"
              width={120}
            ></img>{" "}
          </span>
          <span>
            <img
              alt="chpaly-img"
              src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
              width={120}
            ></img>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
