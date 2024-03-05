import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT_REQUESTED,
} from "../constants";

const initialState = {
  userData: {},
  isLoggedIn: false,
  message: "",
};

export const authReducer = (state = initialState, { type, user, message }) => {
  console.log("type,user,message :>> ", type, user, message);
  switch (type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        userData: { ...user.foundUser },
        isLoggedIn: true,
        message: user?.message,
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        userData: {},
        isLoggedIn: false,
        message,
      };
    case USER_LOGOUT_REQUESTED:
      return {
        ...initialState,
      };
    default:
      return {
        ...state,
      };
  }
};
