import styled from 'styled-components';

function Modal(props){
    let setModal = props.setModal;
    let getModal = props.getModal;
    return(
        <>
        <Modalblack>
            <Modalwhite>
                <button className="close-modal" onClick={()=>setModal(!getModal)}/>X
            </Modalwhite>
        </Modalblack>
        </>
    )
}

export const Modalblack = styled.div`
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    position: fixed;
    text-align: center;
`
export const Modalwhite = styled.div`
    display: inline-block;
    background: white;
    margin-top: 200px;
    height: 700px;
    width: 500px;
    padding: 30px;
`
export default Modal