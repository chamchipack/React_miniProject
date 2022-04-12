import { createAction, handleActions } from "redux-actions";
import {produce} from "immer";
import moment from "moment";

import { actionCreators as imageActions } from "./image";
import axios from "axios";
import {RESP} from "./reponse";

const SET_ARTICLE = "SET_ARTICLE";
const ADD_ARTICLE = "ADD_ARTICLE";
const SEARCH_ARTICLE = "SEARCH_ARTICLE";

const setArticle = createAction(SET_ARTICLE, (articleList) => ({articleList}));
const addArticle = createAction(ADD_ARTICLE, (article) => ({article}));
const searchArticle = createAction(SEARCH_ARTICLE, (articleList) => ({articleList}));

const initialState = {
  list: [],
}

const initialArticle = {
  articleNum: 1,
  articleDesc: "글 내용입니다.",
  articleThumb: "이미지 URL",
  articleDate: "2022.04.08.00:00",
  articleLikeNum: 0,
  articleCommentNum: 1,
  userId: "작성자 아이디",
  articleKind: "카테고리"
};

//middleware;

const getArticleFB = () => {

  return function (dispatch, getState, { history }) {
    axios.get("http://3.35.27.190/api/main")
    .then((response)=>{
    let articleList = [];
    const articles = response.data.articles;
    articles.forEach((article) => {
      articleList.push({ articleNum: article.articleNum, ...article});
    });
    dispatch(setArticle(articleList));
    }).catch((error) => {
      console.log(error);
    });
  }
}

const searchFB = (category = null, searchWord = null) => {

  return function (dispatch, getState, { history }) {
    axios.get(`http://3.35.27.190/api/search?articleKind=${category}&articleDesc=${searchWord}`)
    .then((response)=>{
    let articleList = [];
    const articles = response.data.articles;
    articles.forEach((article) => {
      articleList.push({ articleNum: article.articleNum, ...article});
    });
    dispatch(setArticle(articleList));
    }).catch((error) => {
      console.log(error);
    });
  };
}

// reducer
export default handleActions(
  {
    [SET_ARTICLE]: (state, action) => produce(state, (draft) => {
      draft.list = action.payload.articleList;
    }),
    [ADD_ARTICLE]: (state, action) => produce(state, (draft) => {
      draft.list.unshift(action.payload.post);
    }),
    [SEARCH_ARTICLE]: (state, action) => produce(state, (draft) => {
      draft.list = action.payload.articleList;
    })
  }, initialState
);

const actionCreators = {
  setArticle,
  addArticle,
  getArticleFB,
  searchArticle,
  searchFB
}

export {actionCreators};