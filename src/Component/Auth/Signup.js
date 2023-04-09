import React, { useState } from "react";
import "./Signup.scss";
import { Button, Form, Input } from "reactstrap";
import { Link } from "react-router-dom";

function Signup(props) {
  const { onHandleSignup } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const newUser = {
    email: email,
    password: password,
    fullName: fullName,
  };

  const handleSignup = (e) => {
    e.preventDefault();
    onHandleSignup(newUser);
  };
  return (
    <div className="signup-container col-4 mx-auto">
      <div className="title">MCinema</div>
      <div className="content-form">Signup to watch blockbuster movies</div>
      <Form onSubmit={handleSignup} className="form-group">
        <Input
          className="form-control"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Input
          className="form-control"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Input
          className="form-control"
          name="fullName"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        ></Input>

        <Button check="true" className="signup-btn">
          Signup
        </Button>
      </Form>
      <div className="container-content">
        <div className="footer-content">
          Have an account?{" "}
          <Link to={"/login"} className="login-text">
            Log in
          </Link>
        </div>
      </div>
      <div className="container-footer">
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

export default Signup;
