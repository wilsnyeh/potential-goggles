import { useContext } from "react"
import { CounterContext } from "./CounterContext"

export function BoxCounter () {
    const counter = useContext(CounterContext)
    return (
        <h1 className='box'>{counter}</h1>
    )
}