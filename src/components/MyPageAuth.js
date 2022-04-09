import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Input from "../elements/Input";
import SideBar from "./SideBar";


const MyPageAuth = () => {

  const history = useHistory();

  return (
    <React.Fragment>
      <Wrap>
        <Content>
          <Input label="비밀번호 확인" placeholder="비밀번호를 입력해주세요."/>
        </Content>      

        <div>
          {/* useState로 비밀번호 불러오기 */}
          {/* 불러온 비밀번호랑 여기서 입력한 비밀번호랑 같으면!! 닉네임변경 컴포넌트로 이동. */}
          {/* 일단 조건 없이 페이지 이동 걸어놓음 */}
          <Button onClick={() => {

            history.push("/mypage/changenick");
          }}>확인</Button>
        </div>
      </Wrap>
      <Bar>
        <SideBar/>
      </Bar>
    </React.Fragment>
  )
}

export default MyPageAuth;

const Wrap = styled.div`
  box-sizing: border-box;
  padding: 20px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 50px;
  box-shadow: 0px 7px 10px #ccc;
  border-radius: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px 20px;
  border-radius: 5px;  
  font-weight: 700;
`;


const Bar = styled.div`
  position: fixed;
  top: 150px;
  left: 0;
`;