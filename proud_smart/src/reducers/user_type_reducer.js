const defaultState = {
  userType: sessionStorage.getItem("userType") || null
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case "USER_TYPE":
      return {...state, userType: action.payload}; 
    default:
      return state;
  }
}