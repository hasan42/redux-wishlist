import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewItem } from "../../store/actions/items";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class AddItem extends Component<any> {
  state = {
    isFormValid: false,
    name: "",
    link: "",
    description: "",
    price: 0,
    category: 0,
  };
  render() {
    return (
      <form>
        <div className="mt-2 row">
          <div className="col-3">
            <input
              className="form-control form-control-sm"
              placeholder="Enter name"
              value={this.state.name}
              onChange={(event) => this.setState({ name: event.target.value })}
            />
          </div>
          <div className="col-3">
            <input
              className="form-control form-control-sm"
              placeholder="Enter link"
              value={this.state.link}
              onChange={(event) => this.setState({ link: event.target.value })}
            />
          </div>
          <div className="col-3">
            <input
              className="form-control form-control-sm"
              placeholder="Enter description"
              value={this.state.description}
              onChange={(event) =>
                this.setState({ description: event.target.value })
              }
            />
          </div>
          <div className="col-2">
            <input
              className="form-control form-control-sm"
              placeholder="Enter price"
              value={this.state.price}
              onChange={(event) => this.setState({ price: event.target.value })}
            />
          </div>
          <div className="col-1 text-right">
            <button
              disabled={this.state.name.length <= 0}
              type="submit"
              className="btn btn-primary btn-sm"
              onClick={(event): void => {
                event.preventDefault();
                const newItem = {
                  name: this.state.name,
                  link: this.state.link,
                  description: this.state.description,
                  price: this.state.price,
                  category: this.props.category,
                };
                this.props.addNewItem(newItem);
                this.setState({
                  name: "",
                  link: "",
                  description: "",
                  price: 0,
                });
              }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </form>
    );
  }
}

// function mapStateToProps(state: any) {
//   return {
//     category: state.category.category,
//   };
// }

function mapDispatchToProps(dispatch: any) {
  return {
    addNewItem: (newItem: any) => dispatch(addNewItem(newItem)),
  };
}

export default connect(null, mapDispatchToProps)(AddItem);
