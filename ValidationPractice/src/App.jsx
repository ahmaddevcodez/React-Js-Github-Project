import { useState } from "react";
import FormValidation from "./component/FormValidation";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <FormValidation />
    </>
  );
}

export default App;
