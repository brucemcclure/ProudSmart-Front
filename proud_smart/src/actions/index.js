import LocalAPI from "./../apis/Local";

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

export const fetchEducator = (id) => {
  return async (dispatch, getState) => {
    const response = await LocalAPI.get(`/educators/${id}`)
    
    dispatch({
      type: "EDUCATOR",
      payload: response.data
    })
  }

  
}
