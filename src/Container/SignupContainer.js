import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupApi } from "../Api/authApi";
import Signup from "../Conponent/Auth/Signup";

function SignupContainer(props) {
  const navigate = useNavigate();

  const handleClickSignupButton = () => {
    navigate("/login");
  };
  const [user, setUser] = useState({});
  const onHandleSignup = (newUser) => {
    setUser(newUser);
    signupApi(user).then((response) => {
      handleClickSignupButton();
    });
  };

  return (
    <div>
      <Signup onHandleSignup={onHandleSignup} />
    </div>
  );
}

export default SignupContainer;
