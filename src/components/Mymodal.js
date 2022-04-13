import { useState } from 'react';
import styled from 'styled-components';
import {actionCreators as postActions} from '../redux/modules/post';
import {actionCreators as commentActions} from '../redux/modules/comment';
import {Grid, Input, Image, Button, Text} from '../elements/index';
import {FaHeart} from 'react-icons/fa'

function Mymodal(props){
    let array = [1,2,3];
    const [update, setUpdate] = useState(false);
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
                <div style={{float:'right'}}><Button width='50px' margin='0 0 0 40%'>X</Button></div>
                <div style={{float:'right'}}><Button width='50px' margin='0 0 0 30%'>삭제</Button></div>
                <div style={{float:'right'}}><Button _onClick={()=>{setUpdate(!update)}} width='50px' margin='0 0 0 20%'>수정</Button></div>
                <Grid is_flex>
                    <Grid flex width='100%'> 
                            <Image shape='rectangle' src={'...'}/>
                        <Grid >
                            
                            {
                                update == true
                                ? <TextArea></TextArea>
                                : <Text>이거 글씨 써져있는거</Text>
                            }
                            <FaHeart style={{position:'absolute', right:'10',
                             bottom:'10', fontSize:'50px', }}/>
                        </Grid>
                    </Grid>
                    <Grid flex>
                        <ContentTop>
                            <Grid padding='20px' width='100%' is_flex>
                                <div style={{marginLeft:'0%', borderRadius:'50%'}}>
                                    <Image shape='circle' size='50'/>
                                </div>
                                <div style={{marginLeft:'-30%'}}>
                                    <Text size='20px'>닉네임</Text>
                                </div>
                                <Grid width='40%'>
                                    <Text>2022.03.05</Text>
                                    <Text>댓글 0개 좋아요 0개</Text>
                                </Grid>
                            </Grid>
                        </ContentTop>
                        <ContentBot>
                            {/* 이 부분부터 댓글 반복문 시작 */}
                            <div style={{height:'450px', background:'#eee'}}>
                            {
                                array.map((element,i)=>{
                                    return(
                                            <div style={{display:'flex'}}>
                                                <span style={{}}>작성자 닉네임</span>
                                                <span style={{marginLeft:'10px'}}>댓글</span>
                                            </div>
                                    )
                                })
                            }
                            </div>
                            {/* 여기까지 댓글 반복문 */}
                            
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
export default Mymodal