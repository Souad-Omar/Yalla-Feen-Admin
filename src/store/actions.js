import * as TYPES from "../types";
import axios from "axios";

export const categoryReducer = () => async (dispatch) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch({
      type: TYPES.GET_ALL_CATEGORY,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};
