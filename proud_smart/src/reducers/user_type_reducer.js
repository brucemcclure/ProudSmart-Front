const defaultState = {
  userId: sessionStorage.getItem("userId") || null,
  userType: sessionStorage.getItem("userType") || null
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case "USER":
      return {...state, userId: action.payload.userId, userType: action.payload.userType}; 
    default:
      return state;
  }
}