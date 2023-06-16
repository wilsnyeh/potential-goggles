import React, {useState} from "react"
import { CounterContext } from "./CounterContext"

export const CounterProvider = (children) => {
    const [counter, setCounter] = useState(0)

    return (
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )
}