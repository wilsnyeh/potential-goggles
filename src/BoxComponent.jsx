import { useContext } from "react";
import { CounterContext } from "./CounterContext";

export function BoxComponent() {
  // const boxArr = [1, 2, 3];
  const {counter} = useContext(CounterContext)

  return (
    <>
    <div >
      {/* {boxArr.map((box, i) => {
        return ( */}
          <h1 className="box">
            {counter}
          </h1>
        {/* );
      })} */}
      </div>
    </>
  );
}
