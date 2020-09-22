import axios from "../../axios/axios-wl";
import { Category } from "../../interfaces/interfaces";
import {
  GET_CATEGORIES,
  GET_CATEGORY_REMOTE,
  TOGGLE_DONE_CATEGORY,
  ADD_CATEGORY,
  DEL_CATEGORY,
} from "./actionTypes";

export function fetchCategories() {
  return async (dispatch: any) => {
    try {
      const response = await axios.get("category.php");
      let arrList: Category[] = response.data;
      arrList.sort((a: Category, b: Category) => {
        return a.done - b.done;
      });

      dispatch(getCategories(arrList));
    } catch (error) {
      console.log("error ", error);
    }
  };
}

export function addNewCategory() {
  return async (dispatch: any) => {
    try {
      let formData = new FormData();
      formData.append("actions", "add new");
      formData.append("name", "reduxTest");

      await axios.post("category.php", formData, {
        responseType: "text",
      });

      dispatch(fetchCategories());
    } catch (error) {
      console.log("error ", error);
    }
  };
}

export function getCategories(category: any) {
  return {
    type: GET_CATEGORIES,
    category,
  };
}

export function getCategoryRemote() {
  return {
    type: GET_CATEGORY_REMOTE,
  };
}

export function toggleDoneCategory() {
  return {
    type: TOGGLE_DONE_CATEGORY,
  };
}

export function addCategory() {
  return {
    type: ADD_CATEGORY,
  };
}

export function delCategory() {
  return {
    type: DEL_CATEGORY,
  };
}
