import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";


const UPLOADING = "UPLOADING"; // 업로드중인지?
const UPLOAD_IMAGE = "UPLOAD_IMAGE";
const SET_PREVIEW = "SET_PREVIEW";

const uploading = createAction(UPLOADING, (uploading) => ({ uploading }));
const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => ({ image_url }));
const setPreview = createAction(SET_PREVIEW, (preview) => ({preview}));

const initailState = {
  image_url: "",
  uploading: false,
  preview: null, 
};

const uploadImageDB = (imageFile) => {
  return function (dispatch){
    dispatch(setPreview(imageFile))
  }
}

// reducer
export default handleActions(
  {
    [UPLOAD_IMAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.image_url = action.payload.image_url;
        draft.uploading = false;
      }),
    [UPLOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.uploading = action.payload.uploading;
      }),
    [SET_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.preview;
      }),
  },
  initailState
);

// 이하 액션 내보내기
const actionCreators = {
  uploadImageDB,
  //uploadImageFB,
  setPreview,
};

export { actionCreators };
