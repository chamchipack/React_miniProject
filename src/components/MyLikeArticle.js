import React from "react";
import styled from "styled-components";
import SideBar from "./SideBar";

const MyLikeArticle = () => {

  return (
    <React.Fragment>
      <Wrap>
        내가 좋아요 누른 게시물
      </Wrap>
      <Bar>
        <SideBar/>
      </Bar>
    </React.Fragment>
  )
}

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