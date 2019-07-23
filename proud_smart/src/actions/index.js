export const setAuthToken = (token) => {
  sessionStorage.setItem("token", token);
  return {
    type: "AUTH_TOKEN",
    payload: token
  }
}

export const setUser = (user) => {
  sessionStorage.setItem("userId", user.userId);
  sessionStorage.setItem("userType", user.userType);
  // console.log(`user should be in setUser ${user}`);
  return {
    type: "USER",
    payload: user
  }
}

export const setCourse = (course) => {
  return {
    type: "COURSE",
    payload: course
  }
}