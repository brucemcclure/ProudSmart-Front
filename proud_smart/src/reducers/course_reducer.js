const defaultState = {
  displayedCourse: null
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case "COURSE":
      return {...state, displayedCourse: action.payload}; 
    default:
      return state;
  }
}