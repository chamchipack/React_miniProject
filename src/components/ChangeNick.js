import React from "react";
import styled from "styled-components";
import Input from "../elements/Input";
import SideBar from "./SideBar";

const ChangeNick = () => {

  return (
    <React.Fragment>
      <Wrap>
        <Content>
          <Input label="닉네임 변경" placeholder="변경할 닉네임을 입력해주세요."/>
        </Content>

        <div>
          {/* 기존 닉네임 받아온 후에 입력한 값과 같은지 확인하는 함수 넣기 */}
          <Button onClick={() => {}}>변경</Button>
        </div>
      </Wrap>
      <Bar>
        <SideBar/>
      </Bar>
    </React.Fragment>
  )
}

export default ChangeNick;

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