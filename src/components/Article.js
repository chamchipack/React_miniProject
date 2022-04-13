import React, { useState } from "react";
import styled from "styled-components";
import { Image, Text, Button } from "../elements";
import Modal from '../components/Modal';
import { useSelector } from "react-redux";

const Article = (props) => {
  const [getModal, setModal] = useState(false);
  return (
    <Wrap>
    {
      getModal == true
      ? <Modal articleNum={props.articleNum} data={props} getModal={getModal} setModal={setModal}/>
      : null
    }
    <ArticleBox onClick={()=>{setModal(true)}}>
      <Image shape="rectangle" src={`http://3.35.27.190${props.articleThumb}`}></Image>
      
      <div>
        <Image shape="circle" src={props.articleThumb} />
        <div style={{background: "#eee", overflow: "hidden"}}>
          <div style={{display: "flex", justifyContent: "space-between"}}>            
            <Text bold margin="15px 30px 0 0">
              {props.userId}
            </Text>
            <Text>{props.articleDate}</Text>
          </div>
          <Text>{props.articleDesc}</Text>
          <div style={{display: "flex", float: "right"}}>
            <Text margin="0 10px 0 0" bold>좋아요 {props.articleLikeNum}</Text>
            <Text margin="0px" bold>댓글 {props.articleCommentNum}개</Text>
          </div>
        </div>
      </div>
    </ArticleBox>
    </Wrap>
  );
};

Article.defaultProps = {
  articleNum: 1,
  articleDesc: "글 내용입니다.",
  articleThumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1kNtBWZSEJq1jOPau6-ObyyXqdkmoh0DdA&usqp=CAU",
  articleDate: "2022.04.08.00:00",
  articleLikeNum: 0,
  articleCommentNum: 1,
  userId: "작성자 아이디",
  articleKind: "카테고리"
};

const Wrap = styled.div`
  position: relative;
`;

const ArticleBox = styled.div`
  /* border: 1px solid #ffb72b; */
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
`;

export default Article;
