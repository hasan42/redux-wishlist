import {
  GET_ITEMS,
  GET_ITEMS_REMOTE,
  GET_MIN_PRICE,
  GET_MAX_PRICE,
  TOGGLE_DONE_ITEMS,
  ADD_ITEM,
  DEL_ITEM,
  DEL_ITEMS_BY_CATEGORY,
} from "./actionTypes";

export function getItems() {
  return {
    type: GET_ITEMS,
  };
}

export function getItemsRemote() {
  return {
    type: GET_ITEMS_REMOTE,
  };
}

export function getMinPrice() {
  return {
    type: GET_MIN_PRICE,
  };
}

export function getMaxPrice() {
  return {
    type: GET_MAX_PRICE,
  };
}

export function toggleDoneItems() {
  return {
    type: TOGGLE_DONE_ITEMS,
  };
}

export function addItem() {
  return {
    type: ADD_ITEM,
  };
}

export function delItem() {
  return {
    type: DEL_ITEM,
  };
}

export function delItemsByCategory() {
  return {
    type: DEL_ITEMS_BY_CATEGORY,
  };
}
