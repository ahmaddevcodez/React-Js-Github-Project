// UserContextProvider.js
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
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
