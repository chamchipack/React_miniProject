import React from "react";
import styled from "styled-components";
import { Image, Text, Button } from "../elements";

const Article = (props) => {
  return (
    <ArticleBox>
      <Image shape="rectangle" src={props.image_url}></Image>
      <div style={{display: "flex", alignItems: "center"}}>
        <Image shape="circle" src={props.src} />
        <Text bold margin="10px">
          {props.user_info.user_name}
        </Text>
        <Text>{props.insert_dt}</Text>
      </div>
        <div style={{float: "left"}}>
          <Text>{props.contents}</Text>
        </div>
        <div style={{display: "flex", float: "right"}}>
          <Text margin="0 10px 0 0" bold>좋아요 {props.like_cnt}</Text>
          <Text margin="0px" bold>댓글 {props.comment_cnt}개</Text>
        </div>
        </ArticleBox>
  );
};

Article.defaultProps = {
  user_info: {
    user_name: "동숲러버",
    user_profile:
      "https://1.bp.blogspot.com/-jd26syUy6_s/XqPj6jt4eWI/AAAAAAAAMnU/AJ4mxNl2BPwrGOtInwf1Kz-PqPL14dS4wCLcBGAsYHQ/s1600/%25EB%258B%25A4%25EB%259E%258C%2B%25E3%2582%25B0%25E3%2583%259F%2BPoppy.png",
  },
  image_url:
  "https://mblogthumb-phinf.pstatic.net/MjAyMDA4MjRfMjMg/MDAxNTk4MjA0MDI2NTEw.coTjXpmcdhDe5BS4ozTnYJGf8qdXuq4Jgx7sgyY3YSkg.0GwHfKarwHNGhK9rlU5sNifzsqXIRzkoysXngCneaJ0g.JPEG.sunjaymanggo/2020081910475700-02CB906EA538A35643C1E1484C4B947D.jpg?type=w800",
  contents: "동숲 주민들과 함께하는 일상",
  like_cnt: 10,
  comment_cnt: 10,
  insert_dt: "2022-04-01 10:00:00",
  is_me: false,
};

const ArticleBox = styled.div`
border: 2px solid #ffb72b;
border-radius: 10px;
padding: 15px;
`;

export default Article;
