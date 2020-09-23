import axios from "../../axios/axios-wl";
import { Items } from "../../interfaces/interfaces";
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

export function fetchItems() {
  return async (dispatch: any) => {
    try {
      const response = await axios.get("items.php");
      let arrList: Items[] = response.data;
      arrList.sort((a: Items, b: Items) => {
        return a.price - b.price;
      });

      dispatch(getItems(arrList));
    } catch (error) {
      console.log("error ", error);
    }
  };
}

export function getItemsByCategoryId(id: number) {
  return async (dispatch: any, getState: any) => {
    let arr = getState().items.items.filter(
      (item: Items) => item.category === id
    );
    console.log("arr", arr);
    return arr;
  };
}

export function addNewItem(newItem: any) {
  return async (dispatch: any) => {
    try {
      let formData = new FormData();
      formData.append("actions", "add new");
      formData.append("name", newItem.name);
      formData.append("link", newItem.link);
      formData.append("description", newItem.description);
      formData.append("category", newItem.category);
      formData.append("price", newItem.price);

      await axios.post("items.php", formData, {
        responseType: "text",
      });

      dispatch(fetchItems());
    } catch (error) {
      console.log("error ", error);
    }
  };
}

export function removeItem(id: any) {
  return async (dispatch: any) => {
    try {
      await axios.delete("items.php", { params: { id: id } });

      dispatch(fetchItems());
    } catch (error) {
      console.log("error ", error);
    }
  };
}

export function toggleDoneItem(id: any, done: string) {
  return async (dispatch: any) => {
    try {
      let newDone = done === "1" ? "0" : "1";
      let formData = new FormData();
      formData.append("actions", "toggle done");
      formData.append("id", id);
      formData.append("done", newDone);

      await axios.post("items.php", formData, {
        responseType: "text",
      });
      dispatch(fetchItems());
    } catch (error) {
      console.log("error ", error);
    }
  };
}

export function getItems(items: Items[]) {
  return {
    type: GET_ITEMS,
    items,
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
