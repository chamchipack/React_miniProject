import { createAction, handleActions } from "redux-actions";
import {produce} from "immer";
import axios from "axios";

const ADD_COMMENT = "ADD_COMMENT";

const addComment = createAction(ADD_COMMENT, (post) => ({post}));

const initialState = {
  list: [],
}

const addCommentDB = (imageFile, text, option) => {
    return function(dispatch, getState){
      axios({
        method : 'post',
        url : '...',
        data : {
          articleDesc : text,
          articleThumb : imageFile,
          articleKind : option,
        },
        headers : {
          Authorization : `sends with token`
        },
      })
      .then(response=>{
  
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