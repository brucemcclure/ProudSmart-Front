export const setAuthToken = (token) => {
  sessionStorage.setItem("token", token);
  return {
    type: "AUTH_TOKEN",
    payload: token
  }
}

export const setUserType = (userType) => {
  sessionStorage.setItem("userType", userType);
  return {
    type: "USER_TYPE",
    payload: userType
  }
}