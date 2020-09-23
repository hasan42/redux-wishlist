import React, { Component } from "react";
import { Category, Items } from "../../interfaces/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import Item from "../Item/Item";
import AddItem from "../AddItem/AddItem";
import { connect } from "react-redux";
import { toggleCategory, removeCategory } from "../../store/actions/category";
import { getItemsByCategoryId } from "../../store/actions/items";

interface ListProps extends Category {
  items: Items[];
  toggleCategory: any;
  removeCategory: any;
  getItemsByCategoryId: any;
}

class List extends Component<ListProps> {
  state = {
    formOpen: false,
    maxPrice: 0,
    minPrice: 0,
  };

  getMinPrice(id: number) {
    let arr = this.props.items.filter((item) => item.category === id);
    let min = Math.min.apply(
      Math,
      arr.map((item: Items) => item.price)
    );
    min = min === Infinity ? 0 : min;
    return min;
  }

  getMaxPrice(id: number) {
    let arr = this.props.items.filter((item) => item.category === id);

    let max = Math.max.apply(
      Math,
      arr.map((item: Items) => item.price)
    );
    max = max === -Infinity ? 0 : max;
    return max;
  }

  renderItems(id: number) {
    let arr = this.props.items.filter((item) => item.category === id);

    // this.getMinMaxPrice(arr);

    return arr.map((item: Items) => {
      return <Item key={item.id} {...item} />;
    });
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <div className="list mb-5" key={this.props.id}>
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-1">
                  <button
                    className={
                      this.props.done === "1"
                        ? "btn btn-success btn-sm btn-success"
                        : "btn btn-success btn-sm btn-warning"
                    }
                    onClick={(event): void => {
                      event.preventDefault();
                      this.props.toggleCategory(this.props.id, this.props.done);
                    }}
                  >
                    <FontAwesomeIcon
                      icon={this.props.done === "1" ? faCheckCircle : faCircle}
                    />
                  </button>
                </div>
                <div className="col">{this.props.name}</div>
                <div className="col-2">
                  {this.getMinPrice(this.props.id)} -{" "}
                  {this.getMaxPrice(this.props.id)}
                </div>
                <div className="col-1 text-right">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={(event): void => {
                      event.preventDefault();
                      this.props.removeCategory(this.props.id);
                    }}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              </div>
            </div>

            <div className={this.props.done === "1" ? "deactive" : ""}>
              <div className="list-group list-group-flush">
                {this.renderItems(this.props.id)}
                <div className="list-group-item mt-3">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() =>
                      this.setState({ formOpen: !this.state.formOpen })
                    }
                  >
                    Add new item
                  </button>
                  {this.state.formOpen && (
                    <div>
                      <AddItem category={this.props.id} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    items: state.items.items,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    getItemsByCategoryId: (id: number) => {
      dispatch(getItemsByCategoryId(id));
    },
    toggleCategory: (id: number, done: string) =>
      dispatch(toggleCategory(id, done)),
    removeCategory: (id: number) => dispatch(removeCategory(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
