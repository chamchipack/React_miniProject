import "./App.css";
import { Route } from "react-router-dom";
import Add from "../pages/Add";
import Main from "../pages/Main";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyPageAuth from "../components/MyPageAuth";
import MyPage from "../pages/MyPage";
import MyLikeArticle from "../components/MyLikeArticle";
import ChangeNick from "../components/ChangeNick";
import Header from "../components/Header";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import Modal from '../components/Modal';

function App() {
  return (
    <div className="App">
      <Header />
      <ConnectedRouter history={history}>
        <Route exact path="/" component={Main} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/mypage/auth" component={MyPageAuth} />
        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/mypage/like" component={MyLikeArticle} />
        <Route exact path="/mypage/changenick" component={ChangeNick} />
        <Route exact path='/modal' component={Modal}/>
      </ConnectedRouter>
    </div>
  );
}

export default App;
