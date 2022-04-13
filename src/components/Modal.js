import React from "react";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { actionCreators as articleActions } from "../redux/modules/article";
import { actionCreators as imageActions } from "../redux/modules/image";
import { Grid, Input, Image, Button, Text } from "../elements/index";
import { FaHeart } from "react-icons/fa";
import { getCookie } from "../shared/Cookie";

function Modal(props) {
  const dispatch = useDispatch();
  const textInput = useRef();
  const comment_list = useSelector((state) => state.post.list);
  React.useEffect(() => {
    dispatch(postActions.getPostModalDB(props.articleNum));
  }, []);

  const post = props.data;
  const [update, setUpdate] = useState(false);
  let setModal = props.setModal;
  let getModal = props.getModal;
  let liked = false;
  const cookie = getCookie("is_login");
  const submit = () => {
    // post id값과 토큰 추가
    dispatch(
      commentActions.addCommentDB(
        cookie,
        post.articleNum,
        textInput.current.value
      )
    );
  };
  const likeClick = () => {
    liked = !liked;
    console.log(liked);
    dispatch(postActions.clickLikeDB(post.articleNum, liked, cookie));
  };

  const deleteArticle = () => {
    dispatch(articleActions.deleteArticleFB(post.articleNum, cookie));
  };

  const preview = useSelector((state) => state.image.preview);
  const fileInput = useRef(null);

  const changePreview = (e) => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      dispatch(imageActions.uploadImageDB(reader.result));
    };
  };

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
  const textRef = React.useRef(null);

  const editArticle = () => {
    const desc = textRef.current.value;
    const formData = new FormData();
    if (fileInput.current) {
      formData.append("articleDesc", desc);
      formData.append("articleNum", post.articleNum);
      formData.append("articleThumb", fileInput.current.files[0]);
      formData.append("articleKind", category);
    }
    dispatch(articleActions.editArticleFB(formData, cookie));
  };

  return (
    <>
      <Modalblack>
        <Modalwhite>
          {update === true ? (
            <div style={{ marginTop: "-20px" }}>
              <input
                accept="image/*"
                type="file"
                ref={fileInput}
                onChange={changePreview}
              />
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
                  >
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          ) : null}
          <div style={{ float: "right" }}>
            <Button
              _onClick={() => {
                setModal(!getModal);
              }}
              width="50px"
              margin="0 0 0 40%"
            >
              X
            </Button>
          </div>
          <div style={{ float: "right" }}>
            <Button width="50px" margin="0 0 0 30%" _onClick={deleteArticle}>
              삭제
            </Button>
          </div>
          {update == true ? (
            <div style={{ float: "right" }}>
              <Button
                _onClick={() => {
                  setUpdate(!update);
                  editArticle();
                }}
                width="100px"
                margin="0 0 0 10%"
              >
                수정저장
              </Button>
            </div>
          ) : (
            <div style={{ float: "right" }}>
              <Button
                _onClick={() => {
                  setUpdate(!update);
                }}
                width="50px"
                margin="0 0 0 20%"
              >
                수정
              </Button>
            </div>
          )}
          <Grid is_flex>
            <Grid flex width="100%">
              <Image
                shape="rectangle"
                src={
                  preview ? preview : `http://3.35.27.190${post.articleThumb}`
                }
              />
              <Grid>
                {update === true ? (
                  <TextArea name="text" ref={textRef} />
                ) : (
                  <Text>{post.articleDesc}</Text>
                )}
                <FaHeart
                  onClick={() => {
                    likeClick();
                  }}
                  style={{
                    position: "absolute",
                    right: "10",
                    bottom: "10",
                    fontSize: "50px",
                    color: liked == false ? "gray" : "red",
                  }}
                />
              </Grid>
            </Grid>
            <Grid flex>
              <ContentTop>
                <Grid padding="20px" width="100%" is_flex>
                  <div style={{ marginLeft: "0%", borderRadius: "50%" }}>
                    <Image shape="circle" size="50" />
                  </div>
                  <div style={{ marginLeft: "-30%" }}>
                    <Text size="20px">{post.userInfo.userName}</Text>
                  </div>
                  <Grid width="40%">
                    <Text>{post.articleDate}</Text>
                    <Text>
                      댓글 {post.articleCommentNum}개 좋아요{" "}
                      {post.articleLikeNum}개
                    </Text>
                  </Grid>
                </Grid>
              </ContentTop>
              <ContentBot>
                {/* 이 부분부터 댓글 반복문 시작 */}
                <div style={{ height: "270px", background: "#eee" }}>
                  {comment_list.map((element, i) => {
                    return (
                      <div style={{ display: "flex" }}>
                        <span style={{}}>{element.userName}</span>
                        <span style={{ marginLeft: "10px" }}>
                          {element.contents}
                        </span>
                      </div>
                    );
                  })}
                </div>
                {/* 여기까지 댓글 반복문 */}
                <div>
                  <TextArea ref={textInput}></TextArea>
                </div>
                <Button
                  width="100px"
                  margin="10px 0 0 20px"
                  _onClick={() => {
                    submit();
                  }}
                >
                  저장
                </Button>
              </ContentBot>
            </Grid>
          </Grid>
        </Modalwhite>
      </Modalblack>
    </>
  );
}

export const Modalblack = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  text-align: center;
  left: 0;
  top: 0;
  z-index: 5;
`;
export const Modalwhite = styled.div`
  display: inline-block;
  background: white;
  margin-top: 100px;
  width: 50%;
  height: 600px;
  padding: 40px;
  box-sizing: border-box;
`;
export const ContentTop = styled.div`
  width: 100%;
  height: 20%;
`;
export const ContentBot = styled.div`
  width: 100%;
  height: 80%;
  padding: 20px;
  /* background: blue; */
`;
export const TextArea = styled.input`
  resize: none;
  width: 90%;
  height: 50px;
  border: 3px solid gray;
  border-radius: 10px;
  padding: 10px;
  font-size: 20px;
  box-sizing: border-box;
  margin-top: 30px;
`;
export default Modal;
