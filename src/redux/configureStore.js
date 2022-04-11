import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import user from "./modules/user";
import post from "./modules/post";
import Image from "./modules/image";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  user
});

// 스토어를 만듭니다.
const store = createStore(rootReducer);

export default store;