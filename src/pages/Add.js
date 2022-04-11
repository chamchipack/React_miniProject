// import '../shared/Add.css';
import axios from 'axios';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {Grid, Input, Text, Button} from '../elements/index';
import {actionCreators as imageActions} from '../redux/modules/image';
import {actionCreators as postActions} from '../redux/modules/post';

function Add(){
    const dispatch = useDispatch();
    const fileInput = useRef(null);
    const [getInputs, setInputs] = useState({
        text : '',
        option : '',
    });
    
    const changePreview = (e) => {
        const reader = new FileReader();
        const file = fileInput.current.files[0]
        reader.readAsDataURL(file)
        reader.onloadend = () =>{
            dispatch(imageActions.uploadImageDB(reader.result))
        }
    }
    const preview = useSelector(state => state.image.preview)
    
    const {text, option} = getInputs;
    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...getInputs,
            [name]: value
        })
    }
    
    const formData = new FormData();
        if(fileInput.current){
            formData.append('image', fileInput.current.files[0])
            formData.append('text', getInputs.text)
            formData.append('option', getInputs.option)
            for (var pair of formData.entries()){
                console.log(pair);
             }
        }

    const submit = () => {
        dispatch(postActions.addPostDB(formData))
    }
    
    return(
        <>
        <Grid center width='60%' margin='0 auto' border='3px solid green'>
            <Grid>
                <Text size='30px' bold='30'>게시물 작성</Text>
            </Grid>
            <Grid width='50%' margin='-10% 5% -13%'>
                <Select name='option' value={option} onChange={onChange}>
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
            <Grid margin='2% -14% 2%'>
                <input accept='image/*' type='file' ref={fileInput} onChange={changePreview} />
            </Grid>
            <Grid>
                <TextArea name='text' value={text} onChange={onChange} />
            </Grid>
            <Grid margin='5% 0 5% 0'>
                <Button width='50%' _onClick={submit}>저장하기</Button>
            </Grid>
        </Grid>
        </>
    )
}

export const Select = styled.select`
    width:100px;
    height:30px;
    margin-top: 20%;
    margin-bottom: 10%;
    border: none;
    background-color : #eee;
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