import React, { Component } from "react";
import { connect } from "react-redux";
import { Items } from "../../interfaces/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { toggleDoneItem, removeItem } from "../../store/actions/items";

interface ItemProps extends Items {
  removeItem: any;
  toggleDoneItem: any;
}

class Item extends Component<ItemProps> {
  componentDidMount() {}

  render() {
    return (
      <div className="item list-group-item">
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
                this.props.toggleDoneItem(this.props.id, this.props.done);
              }}
            >
              <FontAwesomeIcon
                icon={this.props.done === "1" ? faCheckCircle : faCircle}
              />
            </button>
          </div>
          <div className="col">
            <div>
              {this.props.link && this.props.link.length >= 0 ? (
                <a
                  href={this.props.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {this.props.name}
                </a>
              ) : (
                this.props.name
              )}
            </div>
          </div>
          <div className="col-2">{this.props.price}</div>
          <div className="col-1 text-right">
            <button className="btn btn-danger btn-sm">
              <FontAwesomeIcon
                icon={faTimes}
                onClick={(event): void => {
                  event.preventDefault();
                  this.props.removeItem(this.props.id);
                }}
              />
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">{this.props.description}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {};
}

function mapDispatchToProps(dispatch: any) {
  return {
    toggleDoneItem: (id: number, done: string) =>
      dispatch(toggleDoneItem(id, done)),
    removeItem: (id: number) => dispatch(removeItem(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);
