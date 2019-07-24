import {combineReducers} from "redux";
import authReducer from "./auth_reducer";
import userTypeReducer from "./user_type_reducer";
import courseReducer from "./course_reducer";
import educatorReducer from "./educator_reducer";
import purchasedCoursesReducer from "./purchased_courses_reducer";
import {reducer as formReducer} from "redux-form";

export default combineReducers({
  auth: authReducer,
  user: userTypeReducer,
  course: courseReducer,
  educator: educatorReducer,
  form: formReducer,
  purchasedCourses:  purchasedCoursesReducer
});
