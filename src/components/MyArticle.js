import React from "react";
import styled from "styled-components";
import SideBar from "./SideBar";

const MyArticle = () => {

  // article 임포트해와서 map으로 뿌려주는 작업해야함.
  return (
    <React.Fragment>
      내가 쓴 게시물!!
      <Bar>
        <SideBar/>
      </Bar>
    </React.Fragment>
  )
}

export default MyArticle;

const Bar = styled.div`
  position: fixed;
  top: 150px;
  left: 0;
`;