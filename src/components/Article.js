import React from "react";
import styled from "styled-components";
import { Image, Text, Button } from "../elements";

const Article = (props) => {

  return (
    <ArticleBox>
      <Image shape="rectangle" src={props.articleThumb}></Image>
      <div style={{display: "flex", alignItems: "center"}}>
        <Image shape="circle" src={props.articleThumb} />
        <Text bold margin="10px">
          {props.userId}
        </Text>
        <Text>{props.articleDate}</Text>
      </div>
        <div style={{float: "left"}}>
          <Text>{props.articleDesc}</Text>
        </div>
        <div style={{display: "flex", float: "right"}}>
          <Text margin="0 10px 0 0" bold>좋아요 {props.articleLikeNum}</Text>
          <Text margin="0px" bold>댓글 {props.articleCommentNum}개</Text>
        </div>
        </ArticleBox>
  );
};

Article.defaultProps = {
  articleNum: 1,
  articleDesc: "글 내용입니다.",
  articleThumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8JXv0vHQwwYl-eZ8MaU1ePxl6eYWnMKJog&usqp=CAU",
  articleDate: "2022.04.08.00:00",
  articleLikeNum: 0,
  articleCommentNum: 1,
  userId: "작성자 아이디",
  articleKind: "카테고리"
};

const ArticleBox = styled.div`
border: 2px solid #ffb72b;
border-radius: 10px;
padding: 15px;
`;

export default Article;
