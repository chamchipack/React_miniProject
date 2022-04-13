import React from "react";
import { useRef, useState } from 'react';
import {actionCreators as imageActions} from '../redux/modules/image';
import { actionCreators as userActions } from "../redux/modules/user";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';

import Input from "../elements/Input";
import SideBar from "./SideBar";

const ChangeNick = () => {
  const dispatch = useDispatch();
  
  // 이미지 미리보기
  const preview = useSelector(state => state.image.preview);
  const fileInput = useRef(null);
  const changePreview = (e) => {
    const reader = new FileReader();
    const file = fileInput.current.files[0]
    reader.readAsDataURL(file)
    reader.onloadend = () =>{
      dispatch(imageActions.uploadImageDB(reader.result));
    }
  }

  const submit = () => {
    // dispatch(userActions.editProfileDB(profile, name));
  }

  return (
    <React.Fragment>
      <Wrap>
        <Content>
          <img style={{borderRadius:'50%', width:'150px', margin:'10px'}} src={preview? preview : "https://www.morepowerfulnc.org/wp-content/uploads/2018/10/300x300-1.png"}/>
          <input accept='image/*' type='file' ref={fileInput} onChange={changePreview} />
        </Content>

        <Content>
          <Input label="닉네임 변경" placeholder="변경할 닉네임을 입력해주세요."/>
          {/* 기존 닉네임 받아온 후에 입력한 값과 같은지 확인하는 함수 넣기 */}
          <Button _onClick={submit}>변경</Button>
        </Content>
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