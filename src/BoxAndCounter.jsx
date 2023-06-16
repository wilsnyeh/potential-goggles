import React, {useState, createContext, useContext} from "react";
import { BoxComponent } from "./BoxComponent";
import { ButtonCounter } from "./ButtonCounter";

const CounterContext = createContext();

export function BoxAndCounter() {
    const [counter, setCounter] = useState(0)

    return (
        <CounterContext.Provider value={{counter, setCounter}}>
            <div >
                <BoxComponent/>
                <ButtonCounter/>
            </div>
        </CounterContext.Provider>
    )
}