import React from "react";
import styled from "styled-components";
import SideBar from "./SideBar";

const MyArticle = () => {

  // article 임포트해와서 map으로 뿌려주는 작업해야함.
  return (
    <React.Fragment>
      <Wrap>
        내가 쓴 게시물!!
      </Wrap>
      <Bar>
        <SideBar/>
      </Bar>
    </React.Fragment>
  )
}

export default MyArticle;

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