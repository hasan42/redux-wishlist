import {
  GET_ITEMS,
  GET_ITEMS_REMOTE,
  GET_MIN_PRICE,
  GET_MAX_PRICE,
  TOGGLE_DONE_ITEMS,
  ADD_ITEM,
  DEL_ITEM,
  DEL_ITEMS_BY_CATEGORY,
} from "../actions/actionTypes";

const initialState = {
  items: [],
};

export default function categoryReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.items,
      };
    case GET_ITEMS_REMOTE:
      return {
        ...state,
      };
    case GET_MIN_PRICE:
      return {
        ...state,
      };
    case GET_MAX_PRICE:
      return {
        ...state,
      };
    case TOGGLE_DONE_ITEMS:
      return {
        ...state,
      };
    case ADD_ITEM:
      return {
        ...state,
      };
    case DEL_ITEM:
      return {
        ...state,
      };
    case DEL_ITEMS_BY_CATEGORY:
      return {
        ...state,
      };
    default:
      return state;
  }
}
