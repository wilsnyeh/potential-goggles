import React, { useState, useContext } from "react";
import "./App.css";
import { BoxComponent } from "./BoxComponent";
import { ButtonCounter } from "./ButtonCounter";
import { CounterContext } from "./CounterContext";
import { BoxAndCounter } from "./BoxAndCounter";


function App() {
const [box, setBox] = useState('')
// const [counter, setCounter] = useState(0)

  return (
    // <CounterContext.Provider value={{counter, setCounter}}>
      <>
      <div className='box-container'>
      <BoxAndCounter/> 

      </div>
      </>

  );
}

export default App;
