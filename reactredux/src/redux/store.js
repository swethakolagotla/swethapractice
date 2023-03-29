import { applyMiddleware, createStore } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./rootReducer";
const store = configureStore({ reducer: rootReducer }, composeWithDevTools(applyMiddleware(logger,thunk)));
export default store;
