import { useSelector } from 'react-redux'
import {getCookie} from '../shared/Cookie';

function Permit(props){
    const cookie = getCookie("is_login");
    
    const parseToken = (token = null) => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
          } catch (e) {
            return null;
          }
    }
    
    const checkLog = () => {
      if(cookie){
        const current_id = parseToken(cookie);
        const post = props.data
        return current_id.userId
      }
    }

    const checkPost_id = () => {
      if(cookie){
        const post_id = props.post.userId
        return post_id
      }
    }
    
    if(checkLog()){
      if(checkLog() == checkPost_id()){
        return <>{props.children}</>
      } else {
        return null;
      }
    } else {
      return null;

    }
}
export default Permit