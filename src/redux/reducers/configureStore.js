import { applyMiddleware, createStore } from "redux";
import rootReducer from "./index";
import thunk from "redux-thunk";

export default function(){
    return createStore(rootReducer,applyMiddleware(thunk))
}