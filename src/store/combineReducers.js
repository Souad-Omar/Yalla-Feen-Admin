import { combineReducers } from "redux";
import categoryReducer from "./reducers/categoryReducer";
import loginReducer from "./reducers/loginReducer";

export default combineReducers({
  category : categoryReducer,
  login: loginReducer
});
