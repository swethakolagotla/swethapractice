import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIcecream } from "../redux";
const ItemContainer = (props) => {
  return (
    <div>
      <h2>Item-{props.item}</h2>
      <button onClick={props.dispatchItem}>BuyItems</button>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numberOfCakes
    : state.icecream.numberOfIceCreams;
  return {
    item: itemState,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIcecream());
return {
    dispatchItem:dispatchFunction
}
};
export default connect(null,mapDispatchToProps)(ItemContainer);
