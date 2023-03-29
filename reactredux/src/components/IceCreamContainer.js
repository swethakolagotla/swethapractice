import React from "react";
import { buyIcecream } from "../redux";
import { connect } from "react-redux";
const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>numberOfIceCreams-{props.numberOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>BUYICECREAM</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    numberOfIceCreams: state.icecream.numberOfIceCreams,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIcecream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
