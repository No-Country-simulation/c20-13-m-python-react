import React from "react";
import "./App.css";

import { useApiCall } from "./store/apiCalls";

function App() {
  const { bears, increasePopulation, removeAllBears } = useApiCall();

  return (
    <>
      <h1>Bears : {bears}</h1>
      <button
        onClick={() => {
          increasePopulation();
        }}
      >
        bears
      </button>
      <button
        onClick={() => {
          removeAllBears();
        }}
      >
        Remove bears
      </button>
    </>
  );
}

export default App;
