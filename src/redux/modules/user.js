import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";


// actions
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";

// action creators
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));


// initialState
const initialState = {
  userId: "",
  userName: "",
  userPw: "",
  userPwConfirm: "",
  userProfile: "",
};

// 미들웨어
const loginDB = (id, pw) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: "http://3.35.51.235/user/login",
      data: {
        userId: id,
        userPw: pw,
      }
    }).then( res => {
      console.log(res.data.logInToken);
      const accessToken = res.data.logInToken;
      console.log(res);
      dispatch(setUser({
        userId: id,
      }))
      setCookie("is_login", id, accessToken)
    }).catch( err => {
      console.log(err);
    })
    
  
  };
};

// (회원가입)
const signUpDB = (id, name, pw) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: "http://3.35.51.235/user/signUp",
      data: {
        userId: id,
        userName: name,
        userPw: pw,
      },
    }).then(response => {
      console.log(response);
      
    }).catch(error => {

    })
  };  
};

// (로그아웃)
const logOutDB = () => {
  return function (dispatch, getState) {
    const id = getState().user.user.userId;
    console.log(id);
    dispatch(logOut(id));
  };
};

// reducer
export default handleActions(
  {
    // 로그인시 받을 데이터
    [SET_USER]: (state, action) => 
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        sessionStorage.removeItem(action.payload.user);
        
        draft.is_login = false;
        console.log(action.payload);
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  logOut,
  signUpDB,
  setUser,
  loginDB,
  logOutDB,

};

export { actionCreators };
