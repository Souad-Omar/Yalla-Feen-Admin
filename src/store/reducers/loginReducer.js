import * as TYPES from "../types/types";

export default (state = {
  isLogged:false,
  isAdmin:false
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
