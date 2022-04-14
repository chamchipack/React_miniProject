import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {actionCreators as postActions} from '../redux/modules/post';
import {actionCreators as commentActions} from '../redux/modules/comment';
import {actionCreators as articleActions} from '../redux/modules/article';
import {actionCreators as imageActions} from '../redux/modules/image';
import {Grid, Input, Image, Button, Text} from '../elements/index';
import {FaHeart} from 'react-icons/fa'
import {getCookie} from '../shared/Cookie';
import Permit from './Permit';

function Modal(props){
    const dispatch = useDispatch();
    const cookie = getCookie("is_login");
    const textInput = useRef();
    const comment_list = useSelector(state => state.comment.list)
    const like_list = useSelector(state => state.post.list);
    const [write, setWrite] = useState({thing : ''});
    
    const parseToken = (token = 'null') => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
          } catch (e) {
            return null;
          }
    }

    const judged = (list = 'null', id = 'null') => {
        if(list.includes(id)){
            return true
        } else {
            return false
        }
    }

    const checkLog = () => {
    if(cookie){
        const current_id = parseToken(cookie);
        const checked = judged(like_list, current_id.userId);
        return checked
        }
    }

    useEffect(()=>{
        dispatch(commentActions.getCommentDB(props.articleNum));
        dispatch(postActions.getLikeDB(props.articleNum));
    },[])

    const post = props.data
    const [update, setUpdate] = useState(false);
    let setModal = props.setModal;
    let getModal = props.getModal;
    let liked = true;

    const {thing} = write; 
    const onChange = (e) => {
      const {name, value} = e.target;
      setWrite({
        ...write,
        [name] : value
      })
    }

    const submit = () => {
        dispatch(commentActions.addCommentDB(cookie, post.articleNum, write.thing));
        setWrite({thing:''});
      }

  const textRef = useRef(null);

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

  const [category, setCategory] = useState("category");
  const handleChange = (e) => {
    if (e.target.value) {
      setCategory(e.target.value);
        }
    }
        
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
  

  const likeClick = () => {
    console.log(checkLog())
      if(checkLog() == true){
        liked = checkLog();
      } else {
        liked = false
      }
    dispatch(postActions.clickLikeDB(post.articleNum, liked, cookie))
    }
  

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
                  <option key={option.value} value={option.value}>
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
          <Permit post={post}>
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
          </Permit>
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
                    color: checkLog() == true ? 'red' : 'gray',
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
                      댓글 {post.articleCommentNum}개 좋아요
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
                      <div style={{ display: "flex", height:'30px'}}>
                        <div style={{float:'left', width:'100px'}}><p style={{}}>{element.userName}</p></div>
                        <div style={{float:'left'}}><p style={{ marginLeft: "10px" }}>{element.contents}</p></div>
                      </div>
                    );
                  })}
                </div>
                {/* 여기까지 댓글 반복문 */}
                <div>
                  <TextArea onChange={onChange} name='thing' value={thing}></TextArea>
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
  )
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
export default Modal
