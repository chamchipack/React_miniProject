// import '../shared/Add.css';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {Grid, Input, Text, Button} from '../elements/index';
import {actionCreators as imageActions} from '../redux/modules/image';

function Add(){
    const dispatch = useDispatch();
    let [option, setOption] = useState();
    let [file, setFile] = useState();
    let [text, setText] = useState();
    
    const fileInput = useRef();
    const textInput = useRef();
    let imageFile = '';
    const changePreview = (e) => {
        const reader = new FileReader();
        const file = fileInput.current.files[0]
        reader.readAsDataURL(file)
        reader.onloadend = () =>{
            imageFile = reader.result;
            setFile(imageFile)
            dispatch(imageActions.uploadImageDB(imageFile))
        }
    }
    const preview = useSelector(state => state.image.preview)

    const selectOption = (e) => {
        let option = e.target.value
        setOption(option);
    }
    const submit = () => {
        console.log(option, file, text)
    }
    const textChange = () => {
        setText(textInput.current.value)
    }
    
    return(
        <>
        <Grid width='80%' margin='0 auto' border='3px solid green'>
            <Grid>
                <Text size='30px' bold='30'>게시물 작성</Text>
            </Grid>
            <Grid width='50%' margin='-10% auto'>
                <input ref={fileInput} onChange={changePreview} type='file'/>
                <Input type='text' placeholder='URL'/>
                <Select onChange={selectOption}>
                    <option>1번옵션</option>
                    <option>2번옵션</option>
                    <option>3번옵션</option>
                    <option>4번옵션</option>
                    <option>5번옵션</option>
                </Select>
            </Grid>
            <Grid margin='10% 0 0 0'>
                <img style={{borderRadius:'20px', width:'50%', margin:'10px'}} src={preview? preview : "http://via.placeholder.com/400x300"}/>
            </Grid>
            <Grid>
                <TextArea onChange={textChange} ref={textInput} />
            </Grid>
            <Grid margin='5% 0 5% 0'>
                <Button width='50%' _onClick={submit()}>저장하기</Button>
            </Grid>
        </Grid>
        </>
    )
}

export const Select = styled.select`
    width:100px;
    margin-top: 20%;
    margin-bottom: 10%;
    border: none;
`
export const TextArea = styled.input`
resize: none;
    width: 48%;
    height: 200px;
    border: 3px solid gray;
    border-radius: 10px;
    padding: 10px;
    font-size : 20px;
`

export default Add