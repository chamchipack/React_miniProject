import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import Input from "../elements/Input";
import SideBar from "./SideBar";


const MyPageAuth = () => {

  const [pw , setPw] = React.useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const checkPw = () => {
    dispatch(userActions.checkPwDB(pw));
  }

  return (
    <React.Fragment>
      <Wrap>
        <Content>
          <Input label="비밀번호 확인" placeholder="비밀번호를 입력해주세요."
            _onChange={(e) => { 
              setPw(e.target.value);
          }}/>
        </Content>      

        <div>
          {/* useState로 비밀번호 불러오기 */}
          {/* 불러온 비밀번호랑 여기서 입력한 비밀번호랑 같으면!! 닉네임변경 컴포넌트로 이동. */}
          {/* 유효시간을 줘야하나? 잘못 눌렀을시에 매번 입력할수는 없으니까 */}
          {/* 일단 조건 없이 페이지 이동 걸어놓음 */}
          <Button onClick={() => {
            checkPw();
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


const Bar = styled.div`
  position: fixed;
  top: 150px;
  left: 0;
`;