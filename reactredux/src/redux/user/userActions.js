import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_REQUEST,
} from "./userTypes";
import axios from "axios";
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest)
    //instead of returning an action, we returning a function.... this return function doesnt have to be pure  .. it can allow side effects such as async api calls
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
      dispatch(fetchUserSuccess(users))
    })
      .catch((error) => {
        const errormessage = error.message;
      dispatch(fetchUsersFailure(errormessage))
    });
  };
};
