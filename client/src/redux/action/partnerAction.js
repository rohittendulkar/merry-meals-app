import axios from "axios";

export const partnerAction = (partner) => async (dispatch) => {
  dispatch({ type: "PARTNER_REQUEST" });
  try {
    await axios.post("http://localhost:5000/api/partner/register", partner);
    dispatch({ type: "PARTNER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "PARTNER_FAIL", payload: error });
  }
};
