import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

const Header = (props) => {
  return (
    <Headerbar>
      <p style={{ margin: "30px", fontFamily: "Quicksand", fontSize: "30px", fontWeight: "bold"}}>
        What do you do FOR FUN?
      </p>
      <div>
        <FiSearch size={30}/>
        <select name="category">
          <option>category</option>
          <option value="운동">운동</option>
          <option value="음악">음악</option>
          <option value="영화">영화</option>
        </select>
        <input type="text" />
        <button>검색</button>
      </div>
      <div style={{margin: "30px"}}>
        <button>Signup</button>
        <button>Login</button>
      </div>
      {/* <div>
      <button>Mypage</button>
      <button>Logout</button>
      </div> */}
    </Headerbar>
  );
};

const Headerbar = styled.div`
  background: #f7f7f7;
  height: 60px;
  width: 100%;
  color: #ffb72b;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
