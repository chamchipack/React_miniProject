import '../shared/App.css';
import React from "react";
import styled from "styled-components";
import Article from '../components/Article';
import { BsPatchPlus } from "react-icons/bs";

const Main = (props) => {
  return (
    <>
      <img className="bgImage" src="main.png" />
      <img className="bgImage" src="main.png" />
      <BsPatchPlus className="plus" size={60} />
      <ArticleList>
      <Article/>
      <Article/>
      <Article/>
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
