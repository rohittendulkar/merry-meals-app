import axios from "axios";

export const registerAction = (user) => async (dispatch) => {
  dispatch({ type: "REGISTER_REQUEST" });
  try {
    const res = await axios.post("http://localhost:5000/api/register", user);
    dispatch({ type: "REGISTER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "REGISTER_FAIL", payload: error });
  }
};
