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
import { fetchCategories, addNewCategory } from "../../store/actions/category";

interface ListProps {
  category: Category[];
  fetchCategories: any;
}

class List extends Component<ListProps> {
  renderCategory() {
    if (this.props.category) {
      return this.props.category.map((cat: any) => {
        return <div key={cat.id}>{cat.name}</div>;
      });
    }
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <div className="list mb-5">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-1">
                <button className="btn btn-success btn-sm">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <FontAwesomeIcon icon={faCircle} />
                </button>
              </div>
              <div className="col">name</div>
              <div className="col-2">showMinPrice - showMaxPrice</div>
              <div className="col-1 text-right">
                <button className="btn btn-danger btn-sm">
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            </div>
          </div>

          <div className="{deactive : done === '1'}">
            <div className="list-group list-group-flush">
              {this.props.category?.length !== 0 ? this.renderCategory() : null}
              <Item />
              <div className="list-group-item mt-3">
                <button className="btn btn-primary btn-sm">Add new item</button>
                <div>
                  <AddItem />
                </div>
              </div>
            </div>
          </div>
        </div>
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
    addNewCategory: () => dispatch(addNewCategory()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
