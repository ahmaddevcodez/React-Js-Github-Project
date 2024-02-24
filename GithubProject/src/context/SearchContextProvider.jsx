import React, { useState } from "react";
import SearchContext from "../context/userContext";

const SearchContextProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [userData, setUserData] = useState(null);

  const updateSearchValue = (value) => {
    setSearchValue(value);
  };

  const updateUserData = (data) => {
    setUserData(data);
  };

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        userData,
        updateSearchValue,
        updateUserData,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
