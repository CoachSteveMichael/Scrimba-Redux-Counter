import React from "react";
import { increment, decrement } from "../actions/Actions";
import { connect } from "react-redux";

function Display(props) {
  return (
    <div className="display">
      {props.value}
      <div className="button-container">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    value: state
  };
}

export default connect(mapStateToProps)(Display);
