import { createAction, handleActions } from "redux-actions";
import {produce} from "immer";

import { actionCreators as imageActions } from "./image";
import axios from "axios";


const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_list) => ({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}));

const initialState = {
  list: [],
}




const addPostDB = (articleDesc, articleThumb, articleKind) => {
  return function(dispatch, getState){
    const user_id = getState().user;
    axios({
      method : 'post',
      url : '...',
      data : {
        cookie : user_id,
        articleDesc : articleDesc,
        articleThumb : articleThumb,
        articleThumb : articleKind,
      },
      
    })
    .then(response=>{

    })
    .catch(error =>{
      console.log(error)
    })
  }
}



const getPostDB = () => {
  return function (dispatch, getState){
    axios.get('...')
    .then(response => {

    })
    .catch(error =>{
      
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
  }, initialState
);

const actionCreators = {
  setPost,
  addPost,
}

export {actionCreators};