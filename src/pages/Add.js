// import '../shared/Add.css';
import axios from 'axios';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {Grid, Input} from '../elements/index';
import {actionCreators as imageActions} from '../redux/modules/image';

function Add(){
    const dispatch = useDispatch();
    const fileInput = useRef();
    let imageFile = '';
    const changePreview = (e) => {
        const reader = new FileReader();
        const file = fileInput.current.files[0]
        reader.readAsDataURL(file)
        reader.onloadend = () =>{
            imageFile = reader.result;
            console.log(imageFile)
            dispatch(imageActions.uploadImageDB(imageFile))
        }
    }

    const preview = useSelector(state => state.image.preview)
    console.log(preview)

    
    return(
        <>
        <Grid width='1200px' height='1000px' margin='0 auto'>
            <Grid border='3px solid green' width='50%' margin='0 auto'>
                    <input ref={fileInput} onChange={changePreview} type='file'/>
                    <Input type='text' placeholder='URL'/>
                
                <Select>
                    <option>1번옵션</option>
                    <option>2번옵션</option>
                    <option>3번옵션</option>
                    <option>4번옵션</option>
                    <option>5번옵션</option>
                </Select>
            </Grid>
            <Grid>
                <img style={{margin:'30px'}} src={preview}/>
                <TextArea />
            </Grid>
            <Button></Button>
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