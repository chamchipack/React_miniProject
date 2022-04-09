import React from "react";
import styled from "styled-components";
import SideBar from "./SideBar";

const MyLikeArticle = () => {

  return (
    <React.Fragment>
      내가 좋아요 누른 게시물
      <Bar>
        <SideBar/>
      </Bar>
    </React.Fragment>
  )
}

export default MyLikeArticle;

const Bar = styled.div`
  position: fixed;
  top: 150px;
  left: 0;
`;