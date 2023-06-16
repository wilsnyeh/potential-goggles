import React, { useState, useContext } from "react";
import "./App.css";
import { BoxCounter } from "./BoxCounter";
import { ButtonCounter } from "./ButtonCounter";
import { CounterContext } from "./CounterContext";
import { BoxAndCounter } from "./BoxAndCounter";


function App() {
  // const [counter, setCounter] = useState(0)
  const {counter} = useContext(CounterContext)

  return (
    <>
    <CounterContext.Provider value={counter}>
    <BoxCounter/>
    <ButtonCounter/>
    </CounterContext.Provider>
    </>
  );
}

export default App;
