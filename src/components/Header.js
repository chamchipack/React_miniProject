import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { Button, Input, Text } from "../elements";
import { history } from "../redux/configureStore";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { actionCreators as searchActions } from "../redux/modules/article";
import { getCookie } from "../shared/Cookie";

const Header = (props) => {
  const [session, setSession] = React.useState(false);
  React.useEffect(() => {
    const token = getCookie("is_login");
    setSession(!!token ? true : false);
  }, []);
  console.log(session); // useEffect안에서 false가 뜨는이유?

  const is_login = useSelector((state) => state.user.is_login);

  // 토큰을 받아왔어도 헤더는 받아오기전상태를 유지하기 떄문에 undefined

  const dispatch = useDispatch();
  const options = [
    { value: "category", name: "category" },
    { value: "운동", name: "운동" },
    { value: "음악", name: "음악" },
    { value: "영화", name: "영화" },
    { value: "게임", name: "게임" },
  ];

  const [category, setCategory] = React.useState("category");
  const handleChange = (e) => {
    if (e.target.value) {
      setCategory(e.target.value);
    }
  };

  const searchRef = React.useRef(null);
  const searchClick = () => {
    const searchWord = searchRef.current.value;
    dispatch(searchActions.searchFB(category, searchWord));
  };

  return (
    <HeaderDiv>
      <p
        onClick={() => {
          history.push("/");
        }}
        style={{
          fontFamily: "Quicksand",
          fontSize: "30px",
          fontWeight: "bold",
          marginLeft: "20px",
        }}
      >
        What do you do FOR FUN?
      </p>
      <div
        style={{
          marginLeft: "-200px",
          height: "50px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <select
          style={{
            width: "100px",
            height: "30px",
            border: "none",
            backgroundColor: "#f7f7f7",
          }}
          onChange={handleChange}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              defaultValue={props.defaultValue === option.value}
            >
              {option.name}
            </option>
          ))}
        </select>
        <input
          style={{
            height: "40px",
            border: "none",
            borderBottom: "2px solid #ffb72b",
            backgroundColor: "#f7f7f7",
          }}
          type="text"
          ref={searchRef}
        />
        <FiSearch size={30} onClick={searchClick} />
      </div>
      {session && is_login ? (
        <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "200px",
          gap: "20px",
        }}
      >
        <Button
          width="80px"
          _onClick={() => {
            history.push("/mypage");
          }}
        >
          mypage
        </Button>
        <Button
          width="80px"
          _onClick={() => {
            dispatch(userActions.logOutDB());
            history.push("/");
          }}
        >
          logout
        </Button>
      </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "200px",
            gap: "20px",
          }}
        >
          <Button
            width="80px"
            _onClick={() => {
              history.push("/signup");
            }}
          >
            signup
          </Button>
          <Button
            width="80px"
            _onClick={() => {
              history.push("/login");
            }}
          >
            login
          </Button>
        </div>
      )}
    </HeaderDiv>
  );
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
