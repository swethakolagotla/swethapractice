import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducers from "./icecreams/iceCreamReducers";
import userReducer from "./user/userReducers";
const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducers,
  user:userReducer
});
export default rootReducer;