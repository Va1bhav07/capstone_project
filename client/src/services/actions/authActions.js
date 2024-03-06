import { USER_LOGIN_REQUESTED, USER_LOGOUT_REQUESTED } from "../constants";

export const loginAction = (data) => {
  return {
    type: USER_LOGIN_REQUESTED,
    payload: data,
  };
};

export const logoutAction = () => {
  return {
    type: USER_LOGOUT_REQUESTED,
  };
};
