import { boxStyles, container } from "@/utils";
import { useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const machine = {
  states: {
    idle: "red",
    loading: "yellow",
    success: "green",
  },
};

export default function FsmOne() {
  const [current, setCurrent] = useState(machine.states.idle);
  const transition = () => {
    if (current === machine.states.idle) {
      setCurrent(machine.states.loading);
    }
    if (current === machine.states.loading) {
      setCurrent(machine.states.success);
    }
    if (current === machine.states.success) {
      setCurrent(machine.states.idle);
    }
  };

  return (
    <main style={container} className={poppins.className}>
      <h1>Finite State Machine I</h1>
      <p>Current state: {current}</p>
      <div style={boxStyles({ colour: current })}></div>
      <button onClick={transition}>Transition</button>
    </main>
  );
}
