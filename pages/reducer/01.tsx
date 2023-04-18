import { boxStyles, container, reducer } from "@/utils";
import { useReducer, useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function ReducerOne() {
  const [state, dispatch] = useReducer(reducer, { color: "red" });

  const updateColor = () => {
    if(state.color === "red") {
      dispatch({ type: "UPDATE_COLOR", color: "yellow" })
    }

    if(state.color === "yellow") {
      dispatch({ type: "UPDATE_COLOR", color: "green" })
    }

    if(state.color === "green") {
      dispatch({ type: "UPDATE_COLOR", color: "red" })
    }
  }

  return (
    <main style={container} className={poppins.className}>
      <h1>Reducer pattern I</h1>
      <p>Current state: {state.color}</p>
      <div style={boxStyles({ colour: state.color })}></div>
      <button onClick={updateColor}>Transition</button>
    </main>
  );
}
