import React from "react";
import styled from "styled-components";

import Input from "../elements/Input"
import { useHistory } from "react-router-dom";


const SignUp = () => {

  const [id, setId] = React.useState("");
  const [name, setName] = React.useState("");
  const [pw, setPw] = React.useState("");
  const [checkPw, setCheckPw] = React.useState("");



  const history = useHistory();

  // 아이디 정규표현식
  const is_id = (id) => {
    let pattern = /^[A-za-z0-9]{4,12}$/;
    return pattern.test(id);    // 맞으면 true, 틀리면 false반환
  }

  // 비밀번호
  const is_pw = (pw) => {
    let pattern = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,20}/;
    return pattern.test(pw);    // 맞으면 true, 틀리면 false반환
  }

  // 닉네임 중복확인
  const checkName = () => {

  }

  // 아이디 중복확인
  const checkId = () => {
    if (id === "") {
      window.alert("공란입니다!")
      return
    }
    console.log("중복요청 dispatch실행!")
  }

  const signup = () => {
    if (id === "" || name === "" || pw === "" || checkPw === "") {
      window.alert("공란입니다!")
      return;
    } else if (pw !== checkPw){
      window.alert("패스워드가 다릅니다.")
      return;
    }
  
  }

  return (
    <React.Fragment>
      <Wrap>
        <Content>
          <Input label="아이디" placeholder="아이디를 입력해주세요." 
            onChange={(e) => {setId(e.target.value); console.log(id)}}
            
          />
          <button onClick={checkId}>중복확인</button>
        </Content>

        <Content>
          <Input label="닉네임" placeholder="닉네임를 입력해주세요." />
        </Content>

        <Content>
          <Input label="비밀번호" type="password" placeholder="비밀번호를 입력해주세요."  />
        </Content>
        <Content>
          <Input label="비밀번호 확인" type="password" placeholder="비밀번호를 확인해주세요."  />
        </Content>
        <div>
          <Button onClick={() => {
            signup();
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


