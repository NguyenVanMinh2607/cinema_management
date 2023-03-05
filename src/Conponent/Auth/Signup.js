import React, { useState } from "react";
import "./Signup.scss";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";

function Signup(props) {
  const { onHandleSignup } = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      password: password,
      fullName: fullName,
    };
    onHandleSignup(newUser);
  };
  return (
    <div className="container">
      <div className="container-header">
        <div className="title">MCinema</div>
        <div className="content">Signup to watch blockbuster movies</div>
        <Form onSubmit={handleSignup} className="form-header">
          <FormGroup floating className="form-content mx-auto">
            <Input
              id="exampleEmail"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Label for="exampleEmail">Username</Label>
          </FormGroup>{" "}
          <FormGroup floating className="form-content mx-auto">
            <Input
              id="examplePassword"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Label for="examplePassword">Password</Label>
          </FormGroup>{" "}
          <FormGroup floating className="form-content mx-auto">
            <Input
              id="exampleFullName"
              name="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <Label for="exampleFullName">FullName</Label>
          </FormGroup>{" "}
          <Button className="mx-auto">Submit</Button>
        </Form>
      </div>
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
          <span className="apple-icon">
            <img
              alt="apple-img"
              src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png"
              width={120}
            ></img>{" "}
          </span>
          <span className="chplay-icon">
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
