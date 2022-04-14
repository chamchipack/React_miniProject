import React from "react";
import "../shared/App.css";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as articleActions } from "../redux/modules/article";
import Article from "../components/Article";
import SideBar from "../components/SideBar";
import { getCookie } from "../shared/Cookie";

const MyPage = () => {
  const dispatch = useDispatch();
  const articleList = useSelector((state) => state.article.list);
  const cookie = getCookie("is_login");

  React.useEffect(() => {
    dispatch(articleActions.getMyArticleFB(cookie));
  }, []);

  return (
    <React.Fragment>
      <Wrap>내가 올린 게시물</Wrap>
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

export default MyPage;

const Bar = styled.div`
  position: fixed;
  top: 150px;
  left: -135px;
  transition: 0.5s;

  &:hover {
    left: -10px;
  }
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
