import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewCategory } from "../../store/actions/category";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class AddCategory extends Component<any> {
  state = {
    isFormValid: false,
    newCategoryName: "",
  };

  render() {
    return (
      <form>
        <div className="row">
          <div className="col">
            <input
              className="form-control"
              placeholder="Enter name"
              value={this.state.newCategoryName}
              onChange={(event) =>
                this.setState({ newCategoryName: event.target.value })
              }
            />
          </div>
          <div className="col-1 text-right">
            <button
              disabled={this.state.newCategoryName.length <= 0}
              className="btn btn-primary btn-sm"
              onClick={(event): void => {
                event.preventDefault();
                this.props.addNewCategory(this.state.newCategoryName);
                this.setState({ newCategoryName: "" });
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
    addNewCategory: (name: string) => dispatch(addNewCategory(name)),
  };
}

export default connect(null, mapDispatchToProps)(AddCategory);
