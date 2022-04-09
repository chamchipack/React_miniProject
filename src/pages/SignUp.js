import React from "react";
import styled from "styled-components";

import Input from "../element/Input"
import { useHistory } from "react-router-dom";


const SignUp = () => {

  const history = useHistory();

  return (
    <React.Fragment>
      <Wrap>
        <Content>
          <Input label="아이디" placeholder="아이디를 입력해주세요." />
          <button>중복확인</button>
        </Content>

        <Content>
          <Input label="닉네임" placeholder="닉네임를 입력해주세요." />
        </Content>

        <Content>
          <Input label="비밀번호" type="password" placeholder="비밀번호를 입력해주세요." />
        </Content>
        <Content>
          <Input label="비밀번호 확인" type="password" placeholder="비밀번호를 확인해주세요." />
        </Content>
        <div>
          <Button onClick={() => {

            // history.push("/login")  회원가입하면 바로 로그인페이지 이동. (단, 검증이 되었을시!)
          }}>회원가입</Button>
        </div>
      </Wrap>
    </React.Fragment>
  )
}

export default SignUp;

const Wrap = styled.div`
  box-sizing: border-box;
  padding: 20px;
  width: 450px;
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


