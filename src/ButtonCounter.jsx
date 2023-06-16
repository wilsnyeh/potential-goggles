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
        <button onClick={handleIncreaseClick}>+1</button>
        <button onClick={handleDecreaseClick}>-1</button>
        </>
    )
}