import instance from "./instance";
import decode from "jwt-decode";
import * as types from "../actions/types";

export const signup = (newUser, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", newUser);
      dispatch({
        type: types.SET_USER,
        payload: decode(res.data.token),
      });
      history.push("/");
      console.log("signed up!!");
    } catch (error) {
      console.log("🚀 ~ file: authActions.js ~ line 9 ~ return ~ error", error);
    }
  };
};

export const signin = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", userData);
      dispatch({
        type: types.SET_USER,
        payload: decode(res.data.token),
      });
      history.push("/");
    } catch (error) {
      console.log("🚀 ~ file: authActions.js ~ line 9 ~ return ~ error", error);
    }
  };
};
