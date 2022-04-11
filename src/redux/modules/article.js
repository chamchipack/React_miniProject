import { createAction, handleActions } from "redux-actions";
import {produce} from "immer";
import moment from "moment";

import { actionCreators as imageActions } from "./image";
import axios from "axios";
import "./reponse";


const SET_ARTICLE = "SET_ARTICLE";
const ADD_ARTICLE = "ADD_ARTICLE";

const setArticle = createAction(SET_ARTICLE, (articleList) => ({articleList}));
const addArticle = createAction(ADD_ARTICLE, (article) => ({article}));

const initialState = {
  list: [],
}

const initialArticle = {
  // id: 0,
  // user_info: {
  //   user_name: "romero",
  //   user_profile: "https://imgnews.pstatic.net/image/076/2022/04/05/2022040501000313400018701_20220405075004285.jpg?type=w647",
  // },
  image_url: "https://imgnews.pstatic.net/image/076/2022/04/05/2022040501000313400018701_20220405075004285.jpg?type=w647",
  contents: "볼 경합중인 토트넘의 수비수 로메로",
  comment_cnt: 0,
  insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),   // moment은 오늘날짜, format 은 어떤형태로.
};

// const addPostFB = (contents="", ) => {
//   return function (dispatch, getState, {history}) {
//     const postDB = firestore.collection("post");

//     const _user = getState().user.user;
//     const user_info = {
//       user_name: _user.user_name,
//       user_id: _user.uid,
//       user_profile: _user.user_profile,
//     }
//     const _post = {
//       ...initialArticle,
//       contents: contents,
//       insert_dt:  moment().format("YYYY-MM-DD hh:mm:ss"), // 한번더 넣어줘야함
//     }

//     const _image = getState().image.preview;
//     console.log(_image);
//     console.log(typeof _image);

//     const _upload = storage.ref(`images/${user_info.user_id}_${new Date().getTime()}`).putString(_image, "data_url");

//     _upload.then(snapshot => {
//       snapshot.ref.getDownloadURL().then(url => {
//         console.log(url);

//         return url;
//       }).then(url => {
//         postDB
//           .add({ ...user_info, ..._post, image_url: url })
//           .then((doc) => {
//             let post = {user_info, ..._post, id: doc.id, image_url: url};
//             dispatch(addArticle(post));
//             history.replace("/");

//             dispatch(imageActions.setPreview(null));
//           }).catch((err) => {
//             window.alert("앗! 포스트 작성에 문제가 있어요!");
//             console.log("post작성에 실패했어요!", err);
//           });
//         }).catch((err) => {
//           window.alert("앗! 이미지 업로드에 문제가 있어요!");
//           console.log("앗! 이미지 업로드에 문제가 있어요!", err);
//         })
//     });
//     // console.log({...user_info, ..._post});
//     // ~~~.add({추가할정보들})
//   }
// }

// const getPostFB = () => {
//   return function (dispatch, getState, {history}) {
//     const postDB = firestore.collection("post");
//     postDB.get().then((docs) => {

//       let post_list = [];

//       docs.forEach((doc) => {
//         // console.log(doc.id, doc.data());
//         let _post = doc.data();

//         // 키값들을 배열로 만들어줌 ['comment_cnt', 'contents', ..]
//         let post = Object.keys(_post).reduce((acc, cur) => {

//           if (cur.indexOf("user_") !== -1) {
//             return {
//               ...acc, 
//               user_info: {...acc.user_info, [cur]: _post[cur]},
//             };
//           }
//           return {...acc, [cur]: _post[cur]}
//         }, {id: doc.id, user_info: {}});
        
//         console.log(post)
//         post_list.push(post);
//       });
//       console.log(post_list);

//       dispatch(setArticle(post_list));
//     });
//   };
// };

// reducer
export default handleActions(
  {
    [SET_ARTICLE]: (state, action) => produce(state, (draft) => {
      draft.list = action.payload.articleList;
    }),
    [ADD_ARTICLE]: (state, action) => produce(state, (draft) => {
      draft.list.unshift(action.payload.post);
    }),
  }, initialState
);

const actionCreators = {
  setArticle,
  addArticle
}

export {actionCreators};