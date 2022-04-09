// import '../shared/Add.css';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {Grid, Input} from '../elements/index';
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
        <Grid width='1200px' height='1000px' margin='0 auto'>
            <Grid border='3px solid green' width='50%' margin='0 auto'>
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
            <Grid>
                <img style={{margin:'30px'}} src={preview}/>
                <TextArea onChange={textChange} ref={textInput} />
            </Grid>
            <Button onClick={()=>{submit()}}>저장하기</Button>
        </Grid>
        </>
    )
}

export const Select = styled.select`
    margin-left: 0%;
    margin-top: 20%;
    margin-bottom: 10%;
    border: none;
`
export const TextArea = styled.input`
resize: none;
    width: 50%;
    height: 300px;
    border: 3px solid gray;
    border-radius: 10px;
    padding: 10px;
`
export const Button = styled.button`
width: 15%;
    height: 40px;
    border-radius: 10px;
    border: none;
    background-color: green;
    position: relative;
    right: -350px;
    color: white;
    margin-top: 50px;
`


export default Add