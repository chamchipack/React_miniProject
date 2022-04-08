import React from "react";
import styled from "styled-components";

const Article = (props) => {
  
    return (
        <ArticleBox>
            이미지
            <div>
                프로필이미지
                닉네임
                작성시간
            </div>
            <div>
                <div>내용</div>
                좋아요
                댓글
            </div>
            </ArticleBox>
    );
  };
  
  Article.defaultProps = {
    user_info: {
      user_name: "",
      user_profile:"",
    },
    image_url: "",
    contents: "",
    like_cnt: 10,
    comment_cnt: 10,
    insert_dt: "2022-04-01 10:00:00",
  };

  const ArticleBox = styled.div`
  border: 2px solid #ffb72b;
  border-radius: 10px;
  padding: 20px;
  color: #000;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  `;
  
  export default Article;
  