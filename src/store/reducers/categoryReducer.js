import * as TYPES from "../types/types";

export default (state = [], action) => {
  switch (action.type) {
    case TYPES.GET_ALL_CATEGORY:
      return {
        ...state,
        category:action.payload,
      };
      break;
    default:
      return state;
  }
};
