const redux = require("redux");
const reduxLogger = require("redux-logger");
const createStore = redux.createStore;
const combineReducers=redux.combineReducers
 const applyMiddleware = redux.applyMiddleware;
const logger=reduxLogger.createLogger()
 
const BUY_CAKE = "BUY_CAKE";
 const BUY_ICECREAM="BUY_ICECREAM"
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux Action",//actions
  };
}
function buyIcreCream(){
    return{
        type:BUY_ICECREAM,
        info:'second redux action'
    }
}
//(prevState,action)=>newState
/*const initialState = {
  numberOfCakes: 10,//state from application
  numberOfIcecreams:20
};*/
const initialCakeState = {
  numberOfCakes: 10,
};
const initialIceCreamState = { numberOfIcecreams: 20 };
const cakeReducer=(state=initialCakeState,action)=>{
    switch(action.type){
             case BUY_CAKE:
      return {
        ...state, //we are basically tell the reducer to make first copy of the state object and then only update the noofcakes
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
 
    }
    const iceCreamReducer=(state=initialIceCreamState,action)=>{
        switch (action.type) {
          case BUY_ICECREAM:
            return {
              ...state, //we are basically tell the reducer to make first copy of the state object and then only update the noofcakes
              numberOfIcecreams: state.numberOfIcecreams - 1,
            };
          default:
            return state;
        }
      
    }
 
/*const reducer = (state = initialState, action) => {//reducer
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, //we are basically tell the reducer to make first copy of the state object and then only update the noofcakes
        numberOfCakes: state.numberOfCakes - 1,
      };
      case BUY_ICECREAM:
        return{
...state,
numberOfIcecreams:state.numberOfIcecreams-1
      }
    default:
      return state;
  }
 
};*/
const rootReducer=combineReducers({
    cake:cakeReducer,
    icecream:iceCreamReducer
})
const store = createStore(rootReducer,applyMiddleware(logger) );
console.log("initualstate", store.getState());//getting the initialstate//10
const unsubscribe = store.subscribe(() =>//we setting up th listener using subscribe
  //console.log("updatedstate", store.getState())
  {}
);
store.dispatch(buyCake());//9
store.dispatch(buyCake());//8
store.dispatch(buyCake());//7
store.dispatch(buyIcreCream());//7
store.dispatch(buyIcreCream());//7
store.dispatch(buyIcreCream());//7
unsubscribe();
