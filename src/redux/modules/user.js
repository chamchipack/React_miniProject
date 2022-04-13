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
  user: null,
  is_login: false,
};

// 미들웨어
const loginDB = (id, pw) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: "http://3.35.27.190/user/login",
      data: {
        userId: id,
        userPw: pw,
      }
    }).then( res => {
      const token = res.data.logInToken;
      setCookie("is_login", token);
      sessionStorage.setItem("token", token)
      
      dispatch(setUser());
      history.push("/");
    }).catch( err => {
      window.alert("로그인 실패!");
    })
    
  
  };
};

// (회원가입)
const signUpDB = (id, name, pw) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: "http://3.35.27.190/user/signUp",
      data: {
        userId: id,
        userName: name,
        userPw: pw,
      },
    }).then(response => {
      console.log(response);
      history.push("/login");
    }).catch(error => {
      window.alert(error);
    })
  };  
};

// (로그아웃)
const logOutDB = () => {
  return function (dispatch, getState) {
    dispatch(logOut());
    sessionStorage.removeItem("token");
    deleteCookie("is_login");
  };
};

// 개인정보 수정시 비밀번호 체크
const checkPwDB = (pw) => {
  const cookie = getCookie("is_login");
  console.log(cookie);
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: "http://3.35.27.190/api/pwCheck",
      data: {
        userPw: pw,
      },
      headers: {
        Authorization: `Bearer${cookie}`
      }
    }).then( res => {
      console.log(res);
      history.push("/mypage/changenick");
    }).catch( err => {
      console.log(err);
      window.alert("비밀번호가 틀렸습니다!");
    })
  }
}

// 닉네임변경
const editProfileDB = (profile, name) => {
  const cookie = getCookie("is_login");
  console.log(cookie);
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: "http://3.35.27.190/api/pwCheck",
      data: {
        userProfile: profile,
        userName: name,
      },
      headers: {
        Authorization: `Bearer${cookie}`
      }
    }).then( res => {
      console.log(res);
    }).catch( err => {
      console.log(err);
    })
  }
}

// reducer
export default handleActions(
  {
    // 로그인시 받을 데이터
    [SET_USER]: (state, action) => 
      produce(state, (draft) => {          
        draft.is_login = true;      // draft는 state다. state 값을 바꾼다. 리덕스에 저장
    }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
        // console.log(action.payload);    // {user: test}
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
  checkPwDB,
  editProfileDB,
};

export { actionCreators };
