const defaultState = {
  purchasedCoursesIds: sessionStorage.getItem("purchasedCoursesIds") || []
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case "PURCHASED_COURSES":
      return {...state, purchasedCoursesIds: action.payload}; 
    default:
      return state;
  }
}