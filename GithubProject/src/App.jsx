import { useState } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Navbar from "./Component/Navbar";
import SearchBar from "./Component/SearchBar";
import Hero from "./Component/Hero";

function App() {
  return (
    <div>
      <Toaster />
      <Navbar />
      <SearchBar />
      <Hero />
    </div>
  );
}

export default App;
