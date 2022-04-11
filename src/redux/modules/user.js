import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

import { auth } from "../../shared/firebase";
import firebase from "firebase/app";

// actions
const LOG_OUT = "LOG_OUT";
const SIGN_UP = "SIGN_UP"

// action creators
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const setUser = createAction(SIGN_UP, (user) => ({ user }));


// initialState
const initialState = {
  user: null,
  is_login: false,
};

// middleware actions
const loginFB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    
  };
};

const signupFB = (id, pwd, user_name) => {
  return function (dispatch, getState, { history }) {
    
  };
};

const loginCheckFB = () => {
  return function (dispatch, getState, {history}){
    
  }
}

const logoutFB = () => {
  return function (dispatch, getState, {history}) {
    
  }
}

// reducer
export default handleActions(
  {
    
  },
  initialState
);

// action creator export
const actionCreators = {
  logOut,

};

export { actionCreators };
