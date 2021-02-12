import * as TYPES from "../types/types";
import axios from "axios";

export const GET_ALL_CATEGORY = () => async (dispatch) => {
  try {
    const response = await axios.get("https://localhost:3500/category/list");
    dispatch({
      type: TYPES.GET_ALL_CATEGORY,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};
