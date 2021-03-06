import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import SideBar from "./SideBar";
import { actionCreators as articleActions } from "../redux/modules/article";
import { getCookie } from "../shared/Cookie";
import Article from "../components/Article";

const MyLikeArticle = () => {
  const dispatch = useDispatch();
  const articleList = useSelector((state) => state.article.list);
  const cookie = getCookie("is_login");

  React.useEffect(() => {
    dispatch(articleActions.getMyLikeArticleFB(cookie));
  }, []);

  return (
    <React.Fragment>
      <Wrap>내가 좋아요 누른 게시물</Wrap>
      <ArticleList>
        {articleList.map((a, idx) => {
          return <Article key={a.articleNum} {...a} />;
        })}
      </ArticleList>
      <Bar>
        <SideBar />
      </Bar>
    </React.Fragment>
  );
};
    
export default MyLikeArticle;

const ArticleList = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 60px auto 0 auto;
  width: 80%;
  left: -10px;
`;

const Wrap = styled.div`
  box-sizing: border-box;
  padding: 20px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 100px;
  box-shadow: 0px 7px 10px #ccc;
  border-radius: 10px;
`;

const Bar = styled.div`
  position: fixed;
  top: 150px;
  left: 0;
`;
