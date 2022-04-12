import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {actionCreators as postActions} from '../redux/modules/post';
import {Grid, Input, Image, Button, Text} from '../elements/index';
import {FaHeart} from 'react-icons/fa'

function Modal(props){
    const dispatch = useDispatch();
    const textInput = useRef();
    const comment_list = useSelector(state => state.post.list)
    useEffect(()=>{
        dispatch(postActions.getPostModalDB(props.articleNum));
    },[])
    const post = props.data
    let setModal = props.setModal;
    let getModal = props.getModal;
    console.log(comment_list)
    // 댓글 저장 및 제출하는 버튼
    const submit = () => {
        // post id값과 토큰 추가
        console.log(textInput.current.value)
    }
    return(
        <>
        <Modalblack>
            <Modalwhite>
                <Button margin='0 0 0 100%' _onClick={()=>setModal(!getModal)}>X</Button>
                <Grid is_flex>
                    <Grid flex width='100%'> 
                            <Image shape='rectangle' src={`http://3.35.27.190${post.articleThumb}`}/>
                        <Grid >
                            <Text>{post.articleDesc}</Text>
                            <FaHeart style={{position:'absolute', right:'10', bottom:'10', fontSize:'50px', color:'red'}}/>
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
    margin-top : -8%;
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