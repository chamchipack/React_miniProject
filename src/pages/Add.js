// import '../shared/Add.css';
import styled from 'styled-components';

function Add(){
    return(
        <>
        <Background>
            <InnerTopBox>
                <input type='file'/>
                <input type='text' placeholder='URL입력'/>
            </InnerTopBox>
            <InnerTopBox>
                <Select>
                    <option>1번옵션</option>
                    <option>2번옵션</option>
                    <option>3번옵션</option>
                    <option>4번옵션</option>
                    <option>5번옵션</option>
                </Select>
            </InnerTopBox>
            <InnerBotBox>
                <img src='https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/2ecb10f5e23493727a80a91421d6242a18b131f743676e72317bde4bd5d27131.png'/>
            </InnerBotBox>
            <InnerBotBox>
                <TextArea />
            </InnerBotBox>
            <Button></Button>
        </Background>
        </>
    )
}

export const Background = styled.div`
    width: 1200px;
    height: 1000px;
    background-color: #eee;
    margin: 0 auto;
    padding: 30px;
`
export const InnerTopBox = styled.div`
    width:50%;
    height:20%;
    float: left;
    background-color:skyblue;
    padding : 30px;
`
export const InnerBotBox = styled.div`
    width: 50%;
    height: 60%;
    float: left;
    background-color:white;
    border: 0.5px solid gray;
    padding-top:50px;
`
export const Select = styled.select`
    margin-left: -59%;
    margin-top: 20%;
    margin-bottom: 10%;
    border: none;
    width: 100px;
    height: 30px;
`
export const TextArea = styled.input`
resize: none;
    width: 70%;
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