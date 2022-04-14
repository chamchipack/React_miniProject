import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import moment from "moment";

import { actionCreators as imageActions } from "./image";
import axios from "axios";

const SET_ARTICLE = "SET_ARTICLE";
const DELETE_ARTICLE = "DELETE_ARTICLE";
const EDIT_ARTICLE = "EDIT_ARTICLE";

const setArticle = createAction(SET_ARTICLE, (articleList) => ({
  articleList,
}));

const deleteArticle = createAction(DELETE_ARTICLE, (articleNum) => ({
  articleNum,
}));
const editArticle = createAction(EDIT_ARTICLE, (article) => ({ article }));

const initialState = {
  list: [],
};

const initialArticle = {
  articleNum: 1,
  articleDesc: "글 내용입니다.",
  articleThumb: "이미지 URL",
  articleDate: "2022.04.08.00:00",
  articleLikeNum: 0,
  articleCommentNum: 1,
  userId: "작성자 아이디",
  articleKind: "카테고리",
};

//middleware;

const getArticleFB = () => {
  return function (dispatch, getState, { history }) {
    axios
      .get("http://3.35.27.190/api/main")
      .then((response) => {
        let articleList = [];
        const articles = response.data.articles;
        articles.forEach((article) => {
          articleList.push({ articleNum: article.articleNum, ...article });
        });
        dispatch(setArticle(articleList));
      })
      .catch((error) => {
      });
  };
};

const getMyArticleFB = (token) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "get",
      url: "http://3.35.27.190/api/article",
      headers: {
        Authorization: `Bearer${token}`,
      },
    })
      .then((response) => {
        let articleList = [];
        const articles = response.data.articles;
        articles.forEach((article) => {
          articleList.push({ articleNum: article.articleNum, ...article });
        });
        dispatch(setArticle(articleList));
      })
      .catch((error) => {
      });
  };
};

const getMyLikeArticleFB = (token) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "get",
      url: "http://3.35.27.190/api/articleLike",
      headers: {
        Authorization: `Bearer${token}`,
      },
    })
      .then((response) => {
        let articleList = [];
        const articles = response.data.articles;
        articles.forEach((article) => {
          articleList.push({ articleNum: article.articleNum, ...article });
        });
        dispatch(setArticle(articleList));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const searchFB = (category = null, searchWord = null) => {
  return function (dispatch, getState, { history }) {
    axios
      .get(
        `http://3.35.27.190/api/search?articleKind=${category}&articleDesc=${searchWord}`
      )
      .then((response) => {
        let articleList = [];
        const articles = response.data.articles;
        articles.forEach((article) => {
          articleList.push({ articleNum: article.articleNum, ...article });
        });
        dispatch(setArticle(articleList));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const deleteArticleFB = (articleNum = null, token) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "delete",
      url: `http://3.35.27.190/api/articleDelete`,
      headers: {
        Authorization: `Bearer${token}`,
      },
      data: {
        articleNum: articleNum,
      },
    })
      .then((response) => {
        dispatch(deleteArticle(articleNum));
        history.replace("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const editArticleFB = (formData, token) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "put",
      url: "http://3.35.27.190/api/articleUpdate",
      data : formData,
      headers: {
        Authorization: `Bearer${token}`,
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        dispatch(
          editArticle(response)
        );
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

// reducer
export default handleActions(
  {
    [SET_ARTICLE]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.articleList;
      }),
    [DELETE_ARTICLE]: (state, action) =>
      produce(state, (draft) => {
        let new_article_list = draft.list.filter(
          (p) => p.articleNum !== action.payload.articleNum
        );
        draft.list = new_article_list;
      }),
    [EDIT_ARTICLE]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.article);
      }),
  },
  initialState
);

const actionCreators = {
  setArticle,
  getArticleFB,
  searchFB,
  deleteArticleFB,
  deleteArticle,
  editArticleFB,
  editArticle,
  getMyArticleFB,
  getMyLikeArticleFB
};

export { actionCreators };
