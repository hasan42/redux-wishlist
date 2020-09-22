import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

export const Item = () => {
  return (
    <div className="item list-group-item">
      <div className="row">
        <div className="col-1">
          <button className="btn btn-success btn-sm">
            <FontAwesomeIcon icon={faCheckCircle} />
            <FontAwesomeIcon icon={faCircle} />
          </button>
        </div>
        <div className="col">
          <div>
            <a href="#" target="_blank">
              name
            </a>
          </div>
        </div>
        <div className="col-2">price</div>
        <div className="col-1 text-right">
          <button className="btn btn-danger btn-sm">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">description</div>
      </div>
    </div>
  );
};
