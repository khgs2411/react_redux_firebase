const initState = {
  authError: null
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("Login Error");

      return {
        ...state,
        authError: "Login failed"
      };
    case "LOGIN_SUCCESS":
      console.log("Login Sucess");
      return {
        ...state,
        authError: null
      };

    case "SIGNOUT_SUCCESS":
      console.log("signed out");
      return state;

    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_ERROR":
      console.log("signUP error");
      return {
        ...state,
        authError: action.err.message
      };

    default:
      return state;
  }
};

export default authReducer;
