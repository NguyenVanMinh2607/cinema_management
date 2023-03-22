import { loginApi, signupApi } from "../../Api/authApi";
import { LOGIN_USER, REGISTER_UER } from "../Contants/ActionType";

export const actionLoginUser = (userAPI) => {
  return (dispatch) => {
    return loginApi(userAPI).then((response) => {
      dispatch(actionLoginUserRedux(response));
    });
  };
};

const actionLoginUserRedux = (userInput) => {
  return {
    type: LOGIN_USER,
    payload: userInput,
  };
};

export const actionRegisterUser = (newUserAPI) => {
  return (dispatch) => {
    return signupApi(newUserAPI).then((response) => {
      dispatch(actionRegisterUserRedux(response));
    });
  };
};

const actionRegisterUserRedux = (newUserInput) => {
  return {
    type: REGISTER_UER,
    payload: newUserInput,
  };
};
