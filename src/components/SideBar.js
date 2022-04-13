import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";


const SideBar = () => {

  const history = useHistory();

  return (
    <React.Fragment>
      <Wrap>
        <div onClick={() => { history.push("/mypage") }}>내가 올린게시물</div>
        <div onClick={() => { history.push("/mypage/like") }}>좋아요 누른 게시물</div>
        <div onClick={() => { history.push("/mypage/auth") }}>개인정보 수정</div>
      </Wrap>
    </React.Fragment>
  )
}

export default SideBar;

const Wrap = styled.div`
  width: 150px;
  height: 300px;
  border-radius: 10px;
  background: #ffb72b;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  div {
    height: 150px;
    border-radius: 10px;
    background: #ffb72b;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    color: #fff;
  
    &:hover {
      background: #ffc72b;
    }
  }

`;