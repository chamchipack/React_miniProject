import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {actionCreators as postActions} from '../redux/modules/post';
import {Grid, Input, Image, Button, Text} from '../elements/index';

function Modal(props){
    const dispatch = useDispatch();
    useEffect(()=>{
        // dispatch(postActions.getPostModalDB());
    },[])
    const comment_list = useSelector(state => state)
    let setModal = props.setModal;
    let getModal = props.getModal;
    return(
        <>
        <Modalblack>
            <Modalwhite>
                <button className="close-modal" onClick={()=>setModal(!getModal)}/>X
                <Grid is_flex>
                    <Grid flex width='100%' bg='#eee'> 
                            <Image shape='rectangle'/>
                        <Grid bg='skyblue'>
                            <Text>hello</Text>
                        </Grid>
                    </Grid>
                    <Grid flex>
                        <ContentTop>
                            <Grid padding='20px' width='100%' is_flex>
                                <div style={{marginLeft:'0%', background:'#eee', borderRadius:'50%'}}>
                                    <Image shape='circle' size='50'/>
                                </div>
                                <div style={{marginLeft:'-30%'}}>
                                    <Text size='20px'>닉네임</Text>
                                </div>
                                <Grid width='40%'>
                                    <Text>N시간 전</Text>
                                    <Text>댓글 {}개 좋아요 {}개</Text>
                                </Grid>
                            </Grid>
                        </ContentTop>
                        <ContentBot>
                            {/* 이 부분부터 댓글 반복문 시작 */}
                            <div style={{height:'400px', background:'red'}}>
                                <Grid>
                                    <p style={{float:'left'}}>닉네임</p>
                                    <p style={{float:'left'}}>아이디</p>
                                </Grid>
                            </div>
                            {/* 여기까지 댓글 반복문 */}
                            <div>
                                <TextArea></TextArea>
                            </div>
                            <Button width='100px' margin='5% 0 0 80%'>저장</Button>
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
    background-color:#eee;
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