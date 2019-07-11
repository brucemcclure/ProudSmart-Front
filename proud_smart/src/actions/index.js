import LocalApi from "./../apis/local";

// auth
export const setAuthToken = token => {
  localStorage.setItem("token", token);

  return {
    type: "AUTH_TOKEN",
    payload: token
  };
};
