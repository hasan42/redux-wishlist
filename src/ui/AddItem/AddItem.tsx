import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const AddItem = () => {
  return (
    <form>
      <div className="mt-2 row">
        <div className="col-3">
          <input
            className="form-control form-control-sm"
            placeholder="Enter name"
          />
        </div>
        <div className="col-3">
          <input
            className="form-control form-control-sm"
            placeholder="Enter link"
          />
        </div>
        <div className="col-3">
          <input
            className="form-control form-control-sm"
            placeholder="Enter description"
          />
        </div>
        <div className="col-2">
          <input
            className="form-control form-control-sm"
            placeholder="Enter price"
          />
        </div>
        <div className="col-1 text-right">
          <button type="submit" className="btn btn-primary btn-sm">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </form>
  );
};
