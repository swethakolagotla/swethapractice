 
import { buyCake } from "../redux";
import { connect } from "react-redux";
import React,{useState} from "react";
const NewCakeContainer = (props) => {
    const[Number,SetNumber]=useState(1)
  return (
    <div>
      <h1>Number of cakes-{props.numberOfCakes}</h1>
      <input type="text" value={Number} onChange={e=>SetNumber(e.target.value)}/>
      <button onClick={()=>props.buyCake(Number)}>Buy{Number}cakes</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (Number) => dispatch(buyCake(Number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
