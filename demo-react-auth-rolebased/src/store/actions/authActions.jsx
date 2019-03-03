import AuthService from "../../services/AuthService";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const login = credential => {
  return dispatch => {
    dispatch({
      type: LOGIN
    });
    AuthService.login(credential)
      .then(res => {
        localStorage.setItem("user", JSON.stringify(res.data));
        setTimeout(() => {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
          });
        }, 2000);
      })
      .catch(err => {
        setTimeout(() => {
          dispatch({
            type: LOGIN_FAILED,
            payload: err
          });
        }, 2000);
      });
  };
};

export const logout = () => {
  return dispatch => {
    localStorage.removeItem("user");
    dispatch({
      type: LOGOUT_SUCCESS
    });
  };
};
