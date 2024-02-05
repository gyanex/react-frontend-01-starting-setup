import React from "react";
import UserList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 1,
      name: "max",
      image:
        "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
      places: 3,
    },
  ];
  return <UserList items={USERS} />;
};

export default Users;
