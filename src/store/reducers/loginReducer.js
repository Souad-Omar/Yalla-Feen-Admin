import * as TYPES from "../types/types";

export default (state = {
  isLogged:localStorage.getItem('token')?true:false,
  isAdmin:localStorage.getItem('token')?true:false,
  username:localStorage.getItem('username')?localStorage.getItem('username'):''
}, action) => {
  switch (action.type) {
    case TYPES.LOGIN:
      return {
        ...action.payload,
      };
      break;
    default:
      return state;
  }
};
