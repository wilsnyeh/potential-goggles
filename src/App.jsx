import React, { useState, useContext } from "react";
import "./App.css";
import { BoxComponent } from "./BoxComponent";
import { ButtonCounter } from "./ButtonCounter";
import { CounterContext } from "./CounterContext";


function App() {
const [box, setBox] = useState('')
const [counter, setCounter] = useState(0)

  return (
      <>
      <BoxComponent counter={counter} element={<ButtonCounter/>} />
      <ButtonCounter counter={counter} setCounter={setCounter}/>
      </>
  );
}

export default App;
