import React from "react";
import styled from "styled-components";

import MyArticle from "../components/MyArticle";
import SideBar from "../components/SideBar";

const MyPage = () => {

  return (
    <React.Fragment>
      {/* MyArticle에서 뿌린 게시물들 가져옴 */}
      <MyArticle/>
      <Bar>
        <SideBar/>
      </Bar>
    </React.Fragment>
  )
}

export default MyPage;

const Bar = styled.div`
  position: fixed;
  top: 150px;
  left: 0;
`;