import React from "react";
import { removeFeature } from "../actions/index";
import { connect } from "react-redux";

const AddedFeature = props => {
  const handler = (event) => {
    event.preventDefault();

    props.removeFeature(props.feature);
  };
  return (
    <li>
      <button className="button" onClick={handler}>
        Click
      </button>

      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeFeature })(AddedFeature);