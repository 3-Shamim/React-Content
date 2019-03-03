import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS
} from "../actions/authActions";

let user = JSON.parse(localStorage.getItem("user"));

const initState = user
  ? {
      token: user.token,
      username: user.username,
      role: user.role,
      isLoggedIn: true,
      loginFailed: false,
      loader: false
    }
  : {
      token: null,
      username: null,
      role: null,
      isLoggedIn: false,
      loginFailed: false,
      loader: false
    };

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, loader: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        username: action.payload.username,
        role: action.payload.role,
        isLoggedIn: true,
        loginFailed: false,
        loader: false
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        loginFailed: true,
        loader: false
      };
    case LOGOUT_SUCCESS:
      console.log(action);
      return {
        ...state,
        token: null,
        username: null,
        role: null,
        loginFailed: false,
        isLoggedIn: false
      };
    default:
      return state;
  }
};

export default authReducer;
