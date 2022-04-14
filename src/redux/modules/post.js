import { createAction, handleActions } from "redux-actions";
import {produce} from "immer";
import axios from "axios";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const SET_MODAL = "SET_MODAL";
const SET_LIKED = "SET_LIKED"

const setPost = createAction(SET_POST, (post_list) => ({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}));
const setModal = createAction(SET_MODAL, (data_list)=>({data_list}));
const setLiked = createAction(SET_LIKED, (liked)=> ({liked}));


const initialState = {
  list: [],
}


const addPostDB = (formData, token) => {
  return function(dispatch, getState){
    axios({
      method : 'post',
      url : 'http://3.35.27.190/api/articlePost',
      data : formData,
      headers : {
        Authorization : `Bearer${token}`,
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response=>{
    })
    .catch(error =>{
      console.log(error)
    })
  }
}

const clickLikeDB = (articleNum, like, token) => {
  return function(dispatch, {history}){
    console.log(articleNum, like, token)
    axios({
      method : 'post',
      url : 'http://3.35.27.190/api/like',
      data : {
        articleNum : articleNum,
        like : like,
      },
      headers : {
        Authorization : `Bearer${token}`,
      }
    })
    .then(response =>{
      dispatch(setLiked(response))
      history.replace("/");
    })
    .catch(error => {
      console.log(error)
    })
  }
}


const getLikeDB = (articleNum) => {
  return function (dispatch, getState){
    axios({
      method : 'get',
      url : `http://3.35.27.190/api/modal?articleNum=${articleNum}`,
    })
    .then(response => {
      let data = response.data
      let like_list = []
      data.like.forEach(e=>{
        like_list.push(e.userId)
      })
      dispatch(setPost(like_list));
    })
    .catch(error =>{
      console.log('Modal middleware error')
    })
  }
}



// reducer
export default handleActions(
  {
    [SET_POST]: (state, action) => produce(state, (draft) => {
      draft.list = action.payload.post_list;
    }),
    [ADD_POST]: (state, action) => produce(state, (draft) => {
      draft.list.unshift(action.payload.post);
    }),
    [SET_MODAL] : (state, action) => produce(state, (draft) => {
      draft.list = action.payload.comment
    }),
    [SET_LIKED] : (state, action) => produce(state, (draft) => {
      draft.list = action.payload.like_idList;
    })
  }, initialState
);

const actionCreators = {
  setPost,
  addPost,
  addPostDB,
  getLikeDB,
  setModal,
  clickLikeDB,
  setLiked,
}

export {actionCreators};