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
