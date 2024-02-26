import React from "react";
import Navbar from "./Component/Navbar";
import SearchBar from "./Component/SearchBar";
import Hero from "./Component/Hero";
import "./App.css";
import UserContextProvider from "./context/userContextProvider";

function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <SearchBar />
      <Hero />
    </UserContextProvider>
  );
}

export default App;
