import { useSelector } from 'react-redux'
import {getCookie} from '../shared/Cookie';

function Permit(props){
    const cookie = getCookie("is_login");
    const parseToken = (token) => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
          } catch (e) {
            return null;
          }
    }
    const current_id = parseToken(cookie);
    const post = props.data
    
    if(current_id.userId == props.post.userId){
        console.log('no')
        return <>{props.children}</>
    }
    return null;
}
export default Permit