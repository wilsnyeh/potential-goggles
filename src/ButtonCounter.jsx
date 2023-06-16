import { useContext } from "react"
import { CounterContext } from "./CounterContext"

export function ButtonCounter() {

    const {counter, setCounter} = useContext(CounterContext)

    const handleIncreaseClick = () => {
        setCounter(counter+1)
    }
    const handleDecreaseClick = () => {
        setCounter(counter-1)
    }
    return (
        <>
        <h1>{counter}</h1>
        <button onClick={handleDecreaseClick}>-1</button>
        <button onClick={handleIncreaseClick}>+1</button>
        </>
    )
}