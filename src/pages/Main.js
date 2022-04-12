import "../shared/App.css";
import React, { useState } from "react";
import styled from "styled-components";
import Article from "../components/Article";
import { BsPatchPlus } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as articleActions } from "../redux/modules/article";


const Main = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const articleList = useSelector((state) => state.article.list);
  
  React.useEffect(() => {
    dispatch(articleActions.getArticleFB());
  }, []);
  return (
    <>
    
      <img className="bgImage" src="main.png" />
      <img className="bgImage" src="main.png" />
      <BsPatchPlus
        className="plus"
        size={60}
        onClick={() => {
          history.push("/login");
        }}
      />
      <ArticleList>
        {articleList.map((a, idx) => {
          return <Article key={a.articleNum} {...a} />;
        })}
      </ArticleList>
    </>
  );
};

const ArticleList = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 60px auto 0 auto;
  width: 80%;
`;

export default Main;
