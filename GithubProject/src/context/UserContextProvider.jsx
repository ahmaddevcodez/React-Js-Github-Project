import React, { createContext, useState } from "react";
import UserContext from "./userContext"; // Adjust the path accordingly

const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const setUserDataValue = (data) => {
    setUserData(data);
  };

  return (
    <UserContext.Provider value={{ userData, setUserDataValue }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
