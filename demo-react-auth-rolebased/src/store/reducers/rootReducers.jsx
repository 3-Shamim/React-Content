import { combineReducers } from "redux";
import authReducer from "./authReducers";
import productReducer from "./productReducers";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer
});

export default rootReducer;
