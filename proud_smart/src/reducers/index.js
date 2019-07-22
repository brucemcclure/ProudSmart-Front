import {combineReducers} from "redux";
import authReducer from "./auth_reducer";
import userTypeReducer from "./user_type_reducer";
import {reducer as formReducer} from "redux-form";

export default combineReducers({
  auth: authReducer,
  user: userTypeReducer,
  form: formReducer
});
