import React from "react";
import styled from "styled-components";

import Input from "../elements/Input";

const Login = () => {

  return (
    <React.Fragment>
      <Wrap>
        <Content>
          <Input label="아이디" placeholder="아이디를 입력해주세요."/>
        </Content>

        <Content>
          <Input label="비밀번호" type="password" placeholder="비밀번호를 입력해주세요."/>
        </Content>
      

        <div>
          <Button onClick={() => {}}>로그인</Button>
        </div>
      </Wrap>
    </React.Fragment>
  )
}

export default Login;

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

  &:hover {
    background: #ddd;
  }
`;
