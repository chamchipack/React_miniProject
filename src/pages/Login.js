import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { useHistory } from "react-router-dom";

import { getCookie } from "../shared/Cookie";

import Input from "../elements/Input";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pw, setPw] = React.useState("");

  const login = () => {
    if (id === "" || pw === "") {
      window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
      return;
    }

    dispatch(userActions.loginDB(id, pw));
  };

  return (
    <React.Fragment>
      <Wrap>
        <Content>
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Content>

        <Content>
          <Input
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            _onChange={(e) => {
              setPw(e.target.value);
            }}
          />
        </Content>

        <div>
          <Button
            onClick={() => {
              login();
              history.push("/");
            }}
          >
            로그인
          </Button>
        </div>
      </Wrap>
    </React.Fragment>
  );
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
