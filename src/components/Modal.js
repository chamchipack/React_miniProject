import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {actionCreators as postActions} from '../redux/modules/post';
import {actionCreators as commentActions} from '../redux/modules/comment';
import {Grid, Input, Image, Button, Text} from '../elements/index';
import {FaHeart} from 'react-icons/fa'
import {getCookie} from '../shared/Cookie';

function Modal(props){
    const dispatch = useDispatch();
    const textInput = useRef();
    const comment_list = useSelector(state => state.post.list)
    const like_list = useSelector(state => state)
    useEffect(()=>{
        dispatch(postActions.getPostModalDB(props.articleNum));
    },[])
    console.log(comment_list)
    console.log(like_list)
    const post = props.data
    const [update, setUpdate] = useState(false);
    let setModal = props.setModal;
    let getModal = props.getModal;
    let liked = false;
    
    const cookie = getCookie("is_login");
    const submit = () => {
        // post id값과 토큰 추가
        dispatch(commentActions.addCommentDB(cookie, post.articleNum, textInput.current.value))
    }

    const likeClick = () => {
        liked = !liked
        console.log(liked)
        dispatch(postActions.clickLikeDB(post.articleNum, liked, cookie))
    }
    
    return(
        <>
        <Modalblack>
            <Modalwhite>
                {
                    update == true
                    ?
                <div style={{marginTop:'-20px'}}>
                    <input accept='image/*' type='file' />
                        <select>
                            <option>CATEGORY</option>
                            <option>음악</option>
                            <option>운동</option>
                            <option>게임</option>
                            <option>뭐냐</option>
                        </select>
                </div>
                : null
                }
                <div style={{float:'right'}}><Button _onClick={()=>{setModal(!getModal)}} width='50px' margin='0 0 0 40%'>X</Button></div>
                <div style={{float:'right'}}><Button width='50px' margin='0 0 0 30%'>삭제</Button></div>
                {
                    update == true
                    ?<div style={{float:'right'}}><Button _onClick={()=>{setUpdate(!update)}} width='100px' margin='0 0 0 10%'>수정저장</Button></div>
                    :<div style={{float:'right'}}><Button _onClick={()=>{setUpdate(!update)}} width='50px' margin='0 0 0 20%'>수정</Button></div>
                }
                
                <Grid is_flex>
                    <Grid flex width='100%'> 
                            <Image shape='rectangle' src={`http://3.35.27.190${post.articleThumb}`}/>
                        <Grid >
                            {
                                update == true
                                ? <TextArea></TextArea>
                                : <Text>{post.articleDesc}</Text>
                            }
                            <FaHeart onClick={()=>{likeClick()}} style={{position:'absolute', right:'10',
                             bottom:'10', fontSize:'50px', color:liked==false ?'gray' : 'red'}}/>
                        </Grid>
                    </Grid>
                    <Grid flex>
                        <ContentTop>
                            <Grid padding='20px' width='100%' is_flex>
                                <div style={{marginLeft:'0%', borderRadius:'50%'}}>
                                    <Image shape='circle' size='50'/>
                                </div>
                                <div style={{marginLeft:'-30%'}}>
                                    <Text size='20px'>{post.userInfo.userName}</Text>
                                </div>
                                <Grid width='40%'>
                                    <Text>{post.articleDate}</Text>
                                    <Text>댓글 {post.articleCommentNum}개 좋아요 {post.articleLikeNum}개</Text>
                                </Grid>
                            </Grid>
                        </ContentTop>
                        <ContentBot>
                            {/* 이 부분부터 댓글 반복문 시작 */}
                            <div style={{height:'350px', background:'#eee'}}>
                            {
                                comment_list.map((element,i)=>{
                                    return(
                                            <div style={{display:'flex'}}>
                                                <span style={{}}>{element.userName}</span>
                                                <span style={{marginLeft:'10px'}}>{element.contents}</span>
                                            </div>
                                    )
                                })
                            }
                            </div>
                            {/* 여기까지 댓글 반복문 */}
                            <div>
                                <TextArea ref={textInput}></TextArea>
                            </div>
                            
                            <Button width='100px' margin='5% 0 0 80%'_onClick={()=>{submit()}}>저장</Button>
                        </ContentBot>
                    </Grid>
                </Grid>
            </Modalwhite>
        </Modalblack>
        </>
    )
}

export const Modalblack = styled.div`
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    position: fixed;
    text-align: center;
    margin-left : -10%;
    z-index:5;
`
export const Modalwhite = styled.div`
    display: inline-block;
    background: white;
    margin-top: 100px;
    width: 60%;
    height: 700px;
    padding: 60px;
`
export const ContentTop = styled.div`
    width:100%;
    height:20%;
`
export const ContentBot = styled.div`
    width:100%;
    height:100%;
    padding:20px;
`
export const TextArea = styled.input`
    resize: none;
    width: 90%;
    height: 130px;
    border: 3px solid gray;
    border-radius: 10px;
    padding: 10px;
    font-size : 20px;
`
export default Modal