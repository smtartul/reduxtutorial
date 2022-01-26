import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";
import producListReducer from "./productListReducer";

const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    producListReducer
})

export default rootReducer;