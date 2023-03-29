import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";
const UserContainer = ({ userDatas, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(userDatas)
  return userDatas.loading ? (
    <h2>loading</h2>
  ) : userDatas.error ? (
    <h2>{userDatas.error}</h2>
  ) : (
    <div>
      <h2>userList</h2>
      <div>
        {userDatas &&
          userDatas.users &&
          userDatas.users.map((user,i) => <p key={i}>{user.name}{user.username}</p>)}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userDatas: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
