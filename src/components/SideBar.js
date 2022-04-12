import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";


const SideBar = () => {

  const history = useHistory();

  return (
    <React.Fragment>
      <Wrap>
        <div onClick={() => { history.push("/mypage") }}>내가 올린<br/>게시물</div>
        <div onClick={() => { history.push("/mypage/like") }}>좋아요 누른<br/>게시물</div>
        <div onClick={() => { history.push("/mypage/auth") }}>개인정보 수정</div>
      </Wrap>
    </React.Fragment>
  )
}

export default SideBar;

const Wrap = styled.div`
  width: 150px;
  height: 300px;
  background: #ccc;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  div {
    height: 150px;
    /* margin-bottom: 15px; */
    background: skyblue;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
  
    &:hover {
      border: 1px solid #000;
    }
  }

`;