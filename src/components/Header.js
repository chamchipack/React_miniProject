import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { Button, Text } from "../elements";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { actionCreators as searchActions } from "../redux/modules/article";

const Header = (props) => {
  
  const is_login = useSelector((state) => state.user.is_login);
  const is_session = sessionStorage.getItem("token")? true : false;

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
      <p onClick={() => { history.replace("/"); window.location.reload(); }}
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
            border: "1px solid #ffb72b",
            backgroundColor: "#fff",
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
        <input style={{
            height: "30px",
            border: "none",
            borderBottom: "1px solid #ffb72b",
            backgroundColor: "#fff",
            boxSizing: "border-box",
            fontSize: "16px",
            paddingLeft: "5px",
            marginLeft: "10px"
          }}
          type="text"
          ref={searchRef}
        />
        <FiSearch size={20} onClick={searchClick} />
      </div>
      {is_session ? (
        <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "200px",
          gap: "20px",
        }}>
        <Button
          _onClick={() => {
            history.push("/mypage");}}>
          MYPAGE
        </Button>
        <Button _onClick={() => {
            dispatch(userActions.logOutDB());
            history.replace("/");
            window.location.reload();
          }}>
          LOGOUT
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
            SIGNUP
          </Button>
          <Button
            width="80px"
            _onClick={() => {
              history.push("/login");
            }}
          >
            LOGIN
          </Button>
        </div>
      )}
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
<<<<<<< HEAD
  background: #fff;
  height: 80px;
=======
  background: #fafafa;
  height: 60px;
>>>>>>> ae84a85d38292ef50cbdbd9162e1bb64a57fb9c8
  width: 100%;
  color: #2474C2;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input:focus {
    outline: none;
  }
  select:focus {
    outline: none;
  }
`;

export default Header;
