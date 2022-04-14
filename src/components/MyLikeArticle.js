import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as articleActions } from "../redux/modules/user";

import styled from "styled-components";
import SideBar from "./SideBar";
import Article from "./Article";

const MyLikeArticle = () => {
  const dispatch = useDispatch();
  const articleList = useSelector((state) => state.user.list);

  React.useEffect(() => {
    dispatch(articleActions.getLikeArticleDB());
  }, [])

  return (
    <React.Fragment>
      
      <Wrap>내가 좋아요 누른 게시물</Wrap>
      <ArticleList>
      {articleList.map((v, i) => {
        return <Article key={v.articleNum} {...v} />
      })}
      </ArticleList>

      <Bar>
        <SideBar />
      </Bar>
    </React.Fragment>
  );
};
    
export default MyLikeArticle;

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
