import React, { Component } from "react";
import { Category } from "../../interfaces/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Item } from "../Item/Item";
import { AddItem } from "../AddItem/AddItem";
import { connect } from "react-redux";
import {
  fetchCategories,
  toggleCategory,
  removeCategory,
} from "../../store/actions/category";

interface ListProps {
  category: Category[];
  fetchCategories: any;
  toggleCategory: any;
  removeCategory: any;
}

class List extends Component<ListProps> {
  renderCategory() {
    return this.props.category.map((cat: any) => {
      return (
        <div className="list mb-5" key={cat.id}>
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-1">
                  <button
                    className={
                      cat.done === "1"
                        ? "btn btn-success btn-sm btn-success"
                        : "btn btn-success btn-sm btn-warning"
                    }
                    onClick={(event): void => {
                      event.preventDefault();
                      this.props.toggleCategory(cat.id, cat.done);
                    }}
                  >
                    <FontAwesomeIcon
                      icon={cat.done === "1" ? faCheckCircle : faCircle}
                    />
                  </button>
                </div>
                <div className="col">{cat.name}</div>
                <div className="col-2">showMinPrice - showMaxPrice</div>
                <div className="col-1 text-right">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={(event): void => {
                      event.preventDefault();
                      this.props.removeCategory(cat.id);
                    }}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              </div>
            </div>

            <div className={cat.done === "1" ? "deactive" : ""}>
              <div className="list-group list-group-flush">
                <Item />
                <div className="list-group-item mt-3">
                  <button className="btn btn-primary btn-sm">
                    Add new item
                  </button>
                  <div>
                    <AddItem />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <>
        {this.props.category ? (
          <>{this.renderCategory()}</>
        ) : (
          <div className="list mb-5">Loading...</div>
        )}
      </>
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
    toggleCategory: (id: number, done: string) =>
      dispatch(toggleCategory(id, done)),
    removeCategory: (id: number) => dispatch(removeCategory(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
