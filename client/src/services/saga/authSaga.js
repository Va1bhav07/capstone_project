import { takeLatest, call, put } from "redux-saga/effects";
import {
  USER_LOGIN_REQUESTED,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from "../constants";
import { apiAxios } from "../../utilities/axios";

function* fetchLogin(action) {
  try {
    const url = "/login";
    const user = yield call(apiAxios.post, url, action.payload);
    yield put({ type: USER_LOGIN_SUCCESS, user });
  } catch (e) {
    yield put({ type: USER_LOGIN_FAIL, message: e.message });
  }
}

export default function* watchFork() {
  yield takeLatest(USER_LOGIN_REQUESTED, fetchLogin);
}
