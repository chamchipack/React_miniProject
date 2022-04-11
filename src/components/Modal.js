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
                        <Grid flex bg='green'></Grid>
                        <Grid flex bg='blue'></Grid>
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
    width: 50%;
    height: 700px;
    padding: 60px;
`
export default Modal