import { applyMiddleware, createStore } from "redux";
import rootReduser from "./Redux/Reduser";
import {thunk} from "redux-thunk";

const Store = createStore(rootReduser,applyMiddleware(thunk))
export default Store;