import { useContext } from "react"
import { CounterContext } from "./CounterContext"

export function ButtonCounter({setCounter}) {

    const counter = useContext(CounterContext)

    const handleIncreaseClick = () => {
        setCounter(counter+1)
    }
    const handleDecreaseClick = () => {
        setCounter(counter-1)
    }
    return (
        <>
        <CounterContext.Provider>
        <button onClick={handleDecreaseClick}>-1</button>
        <button onClick={handleIncreaseClick}>+1</button>
        </CounterContext.Provider>
        </>
    )
}