import React from "react";
import List from "../List/List";
import AddCategory from "../AddCategory/AddCategory";

export const Wish = () => {
  return (
    <div className="wish">
      <h1>redux + wishlist</h1>
      <div className="mb-5">
        <p>Add new category</p>
        <AddCategory />
      </div>
      <List />
    </div>
  );
};
