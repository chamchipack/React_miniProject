import { createAction, handleActions } from "redux-actions";
import {produce} from "immer";
import axios from "axios";

const ADD_COMMENT = "ADD_COMMENT";

const addComment = createAction(ADD_COMMENT, (post) => ({post}));

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
        console.log(response)
      })
      .catch(error =>{
        console.log(error)
      })
    }
  }

  export default handleActions(
    {
      [ADD_COMMENT]: (state, action) => produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
    }, initialState
  );
  
  const actionCreators = {
    addComment,
    addCommentDB,
  }
  
  export {actionCreators};