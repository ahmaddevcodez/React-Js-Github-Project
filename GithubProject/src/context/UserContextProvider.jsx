import React, { createContext, useState } from "react";
import UserContext from "./userContext"; // Adjust the path accordingly

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const setUserDataValue = (data) => {
    setUserData(data);
  };
};

export default UserContextProvider;
