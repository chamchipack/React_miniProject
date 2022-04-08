import './App.css';
import { Route } from 'react-router-dom';
import Add from '../pages/Add';
import Enter from '../pages/Enter';
import Main from '../pages/Main';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import MyPageAuth from '../pages/MyPageAuth';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Main}/>
      <Route exact path='/add' component={Add}/>
      <Route exact path='/userEnter' component={Enter}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/signUp' component={SignUp}/>
      <Route exact path='/myPage/Auth' component={MyPageAuth}/>
    </div>
  );
}

export default App;
