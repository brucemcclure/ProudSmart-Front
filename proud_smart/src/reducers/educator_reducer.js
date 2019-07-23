const defaultState = {
  educatorProfile: null,
  taughtCourses: null
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case "EDUCATOR":
      return {...state, educatorProfile: action.payload.educator, taughtCourses: action.payload.taughtCourses}; 
    default:
      return state;
  }
}