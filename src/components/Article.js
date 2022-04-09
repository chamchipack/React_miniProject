import React from "react";
import {Grid, Image, Text, Button} from "../elements";

const Article = (props) => {
  
    return (
        <Grid border padding="20px" color="#000" flex>
          <Image shape="rectangle" src={props.image_url}></Image>
          <Grid>
          <Image shape="circle" src={props.src} />
          <Text size="large" bold>{props.user_info.user_name}</Text>
          <Text size="large">{props.insert_dt}</Text>
          </Grid>
          <Grid>
            <Grid><Text size="large">{props.contents}</Text></Grid>
            <Grid>
            <Text>좋아요 {props.like_cnt}</Text>
            <Text>댓글 {props.comment_cnt}개</Text>
            </Grid>
            </Grid>
        </Grid>
    );
  };
  
  Article.defaultProps = {
    user_info: {
      user_name: "동숲러버",
      user_profile:"https://1.bp.blogspot.com/-jd26syUy6_s/XqPj6jt4eWI/AAAAAAAAMnU/AJ4mxNl2BPwrGOtInwf1Kz-PqPL14dS4wCLcBGAsYHQ/s1600/%25EB%258B%25A4%25EB%259E%258C%2B%25E3%2582%25B0%25E3%2583%259F%2BPoppy.png",
    },
    image_url: "https://1.bp.blogspot.com/-jd26syUy6_s/XqPj6jt4eWI/AAAAAAAAMnU/AJ4mxNl2BPwrGOtInwf1Kz-PqPL14dS4wCLcBGAsYHQ/s1600/%25EB%258B%25A4%25EB%259E%258C%2B%25E3%2582%25B0%25E3%2583%259F%2BPoppy.png",
    contents: "동숲 주민들과 함께하는 일상",
    like_cnt: 10,
    comment_cnt: 10,
    insert_dt: "2022-04-01 10:00:00",
    is_me: false,
  };
  
  export default Article;
  