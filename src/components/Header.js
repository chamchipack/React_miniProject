import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { Button, Input, Text } from "../elements";
import { history } from "../redux/configureStore";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators, actionCreators as userActions } from "../redux/modules/user";

const Header = (props) => {
  
  const is_login = useSelector((state) => state.user.is_login);
  const is_session = sessionStorage.getItem("token")? true : false;
  console.log("is_login: "+is_login, "is_session: "+is_session);
  
  const dispatch = useDispatch();

  if (is_login && is_session ) {
    return (
    <HeaderDiv>
      <p onClick={() => { history.push("/"); }}
        style={{
          fontFamily: "Quicksand",
          fontSize: "30px",
          fontWeight: "bold",
          marginLeft: "20px",
        }}>
        What do you do FOR FUN?
      </p>
      <div style={{
          marginLeft: "-200px",
          height: "50px",
          display: "flex",
          alignItems: "center",
        }}>
        <select style={{
            width: "100px",
            height: "30px",
            border: "none",
            backgroundColor: "#f7f7f7",
          }}
          name="category">
          <option>category</option>
          <option value="운동">운동</option>
          <option value="음악">음악</option>
          <option value="영화">영화</option>
          <option value="게임">게임</option>
        </select>
        <input style={{
            height: "40px",
            border: "none",
            borderBottom: "2px solid #ffb72b",
            backgroundColor: "#f7f7f7",
          }}
          type="text"/>
        <FiSearch size={30} />
      </div>
      <div style={{
          display: "flex",
          alignItems: "center",
          width: "200px",
          gap: "20px",
        }}>
        <Button
          width="80px" _onClick={() => {
            history.push("/mypage");}}>
          mypage
        </Button>
        <Button width="80px" _onClick={() => {
            dispatch(userActions.logOutDB());
            history.push("/");
          }}>
          logout
        </Button>
      </div>
      {/* <div>
      <button>Mypage</button>
      <button>Logout</button>
      </div> */}
    </HeaderDiv>
    )
  } else {
    return (
    <HeaderDiv>
      <p onClick={() => { history.push("/");}}
        style={{
          fontFamily: "Quicksand",
          fontSize: "30px",
          fontWeight: "bold",
          marginLeft: "20px",
        }}>
        What do you do FOR FUN?
      </p>
      <div style={{
          marginLeft: "-200px",
          height: "50px",
          display: "flex",
          alignItems: "center",
        }}>
        <select
          style={{
            width: "100px",
            height: "30px",
            border: "none",
            outline: "none",
            backgroundColor: "#f7f7f7",
          }}
          name="category">
          <option>category</option>
          <option value="운동">운동</option>
          <option value="음악">음악</option>
          <option value="영화">영화</option>
          <option value="게임">게임</option>
        </select>
        <input style={{
            height: "40px",
            border: "none",
            outline: "none",
            borderBottom: "2px solid #ffb72b",
            backgroundColor: "#f7f7f7",
          }}
          type="text"/>
        <FiSearch size={30} />
      </div>
      <div style={{
          display: "flex",
          alignItems: "center",
          width: "200px",
          gap: "20px",
        }}>
        <Button
          width="80px" _onClick={() => { history.push("/signup"); }}>
          Sign up
        </Button>
        <Button width="80px" _onClick={() => { history.push("/login"); }}>
          Login
        </Button>
      </div>
      {/* <div>
      <button>Mypage</button>
      <button>Logout</button>
      </div> */}
    </HeaderDiv>
    )
  }
};

const HeaderDiv = styled.div`
  background: #f7f7f7;
  height: 60px;
  width: 100%;
  color: #ffb72b;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Header;
