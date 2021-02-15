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

export const LOGIN = (body) => async (dispatch) => {
  try {
    
    const response = await axios.post("http://localhost:3000/user/login",body);
    if(response.status ==200){
      // console.log('yes ');
      if(response.data.role=='admin'){
        // console.log(response.data);
      window.localStorage.setItem('token',response.data.token);
      window.localStorage.setItem('username',response.data.username);
        dispatch({
          type: TYPES.LOGIN, 
          payload: {isLogged:true,isAdmin:true,username:response.data.username},
        });
    }
  }
    // console.log(body,dispatch);
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};
