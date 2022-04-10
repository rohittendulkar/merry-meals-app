export const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case "REGISTER_REQUEST":
      return {
        loading: true,
      };

    case "REGISTER_SUCCESS":
      return {
        loading: false,
        success: true,
      };

    case "REGISTER_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return { state };
  }
};

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        loading: true,
      };

    case "LOGIN_SUCCESS":
      return {
        loading: false,
        success: true,
        currentUser: action.payload,
      };

    case "LOGIN_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return { state };
  }
};
