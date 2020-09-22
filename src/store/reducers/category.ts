import {
  GET_CATEGORIES,
  GET_CATEGORY_REMOTE,
  TOGGLE_DONE_CATEGORY,
  ADD_CATEGORY,
  DEL_CATEGORY,
} from "../actions/actionTypes";

const initialState = {
  category: [],
};

export default function categoryReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        category: action.category,
      };
    case GET_CATEGORY_REMOTE:
      return {
        ...state,
      };
    case TOGGLE_DONE_CATEGORY:
      return {
        ...state,
      };
    case ADD_CATEGORY:
      return {
        ...state,
      };
    case DEL_CATEGORY:
      return {
        ...state,
      };
    default:
      return state;
  }
}
