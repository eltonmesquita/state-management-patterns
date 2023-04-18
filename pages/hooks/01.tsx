import { boxStyles, container, reducer } from "@/utils";
import { useReducer, useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function HooksOne() {
  const [color, setColor] = useState('red');

  const updateColor = () => {
    if(color === "red") {
      setColor("yellow")
    }

    if(color === "yellow") {
      setColor("green")
    }

    if(color === "green") {
      setColor("red")
    }
  }

  return (
    <main style={container} className={poppins.className}>
      <h1>Hooks/Context pattern I</h1>
      <p>Current state: {color}</p>
      <div style={boxStyles({ colour: color })}></div>
      <button onClick={updateColor}>Transition</button>
    </main>
  );
}
