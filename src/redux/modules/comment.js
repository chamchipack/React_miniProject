import { createAction, handleActions } from "redux-actions";
import {produce} from "immer";
import axios from "axios";

const ADD_COMMENT = "ADD_COMMENT";
const SET_COMMENT = "SET_COMMENT";

const addComment = createAction(ADD_COMMENT, (post) => ({post}));
const setComment = createAction(SET_COMMENT, (comment) => ({comment}));

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
    }, initialState
  );
  
  const actionCreators = {
    addComment,
    addCommentDB,
    getCommentDB,
    setComment,
  }
  
  export {actionCreators};