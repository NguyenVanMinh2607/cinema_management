import { LOGIN_USER, REGISTER_UER } from "../Contants/ActionType";

const initialState = {
  user: {},
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      let loginAPI = action.payload;
      return { ...state, login: loginAPI };
    case REGISTER_UER:
      let registerApi = action.payload;
      return { ...state, register: registerApi };
    default:
      return { ...state };
  }
};

export default AuthReducer;
