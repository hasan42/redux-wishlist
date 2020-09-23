import React, { Component } from "react";
import { Category } from "../../interfaces/interfaces";
import { connect } from "react-redux";
import { fetchCategories } from "../../store/actions/category";
import { fetchItems } from "../../store/actions/items";
import List from "../List/List";
import AddCategory from "../AddCategory/AddCategory";

class Wish extends Component<any> {
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchItems();
  }

  render() {
    return (
      <div className="wish">
        <h1>redux + wishlist</h1>
        <div className="mb-5">
          <p>Add new category</p>
          <AddCategory />
        </div>

        {this.props.category ? (
          this.props.category.map((cat: Category) => {
            return <List key={cat.id} {...cat} />;
          })
        ) : (
          <div className="list mb-5">Loading...</div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    category: state.category.category,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchItems: () => dispatch(fetchItems()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wish);
