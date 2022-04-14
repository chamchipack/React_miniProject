import { createAction, handleActions } from "redux-actions";
import {produce} from "immer";
import axios from "axios";

const ADD_COMMENT = "ADD_COMMENT";
const SET_COMMENT = "SET_COMMENT";
const DELETE = 'DELETE';

const addComment = createAction(ADD_COMMENT, (post) => ({post}));
const setComment = createAction(SET_COMMENT, (comment) => ({comment}));
const deleteComment = createAction(DELETE, (comment) => ({comment}));

const initialState = {
  list: [],
}

const addCommentDB = (token, articleNum, text) => {
    return function(dispatch, getState){
      axios({
        method : 'post',
        url : 'http://3.35.27.190/api/commentPost',
        data : {
          articleNum : articleNum,
          contents : text,
        },
        headers : {
          Authorization : `Bearer${token}`
        },
      })
      .then(response=>{
        console.log(response.data.comment)
        dispatch(addComment(response.data.comment))
      })
      .catch(error =>{
        console.log(error)
      })
    }
  }

  const getCommentDB = (articleNum) => {
    return function (dispatch, getState){
      axios({
        method : 'get',
        url : `http://3.35.27.190/api/modal?articleNum=${articleNum}`,
      })
      .then(response => {
        let data = response.data
        dispatch(setComment(data.comments));
      })
      .catch(error =>{
        console.log('Modal middleware error')
      })
    }
  }

  const deleteCommentDB = (commentNum, token) => {
    return function (dispatch){
      axios({
        method : 'delete',
        url : 'http://3.35.27.190/api/commentDelete',
        data : {
          commentNum : commentNum
        },
        headers : {
          Authorization : `Bearer${token}`
        },
      })
      .then(response => {
        console.log(response)
        dispatch(deleteComment(commentNum))
      })
      .catch(error => {
        console.log(error)
      })
    }
  }

  export default handleActions(
    {
      [ADD_COMMENT]: (state, action) => {
        console.log(state);
        return {
          ...state,
          list : state.list.concat(action.payload.post)
        }
      },
      [SET_COMMENT] : (state, action) => produce(state, (draft) => {
        draft.list = action.payload.comment
      }),
      [DELETE] : (state, action) => produce(state, (draft) =>{
        let array = draft.list.filter(element => element.commentNum !== action.payload.comment);
        draft.list = array
      }),
    }, initialState
  );
  
  const actionCreators = {
    addComment,
    addCommentDB,
    getCommentDB,
    setComment,
    deleteCommentDB,
    deleteComment,
  }
  
  export {actionCreators};