import { boxStyles, container, fetchGithubStars, formStyles } from "@/utils";
import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function Summary() {
  return (
    <main style={container} className={poppins.className}>
      <h1>Reducer pattern</h1>
      <h2>Pros</h2>
      <ul>
        <li>Tried, test and solid pattern</li>
        <li>Easily scalable</li>
        <li>Easy to debug</li>
        <li>Guards the store against unknown states</li>
        <li>Clear separation of concerns</li>
        <li>Predictable</li>
        <li>Baked in react, no additional tools</li>
        <li>Makes time-travel easier to implement</li>
        <li>Easy to test</li>
      </ul>

      <h2>Cons</h2>
      <ul>
        <li>Boilerplate</li>
        <li>Big learning curve at first</li>
        <li>Doesn't handle async interactions out-of-the-box</li>
        <li>Not able to handle complex apps by itself, needs additional tooling/libraries/patterns</li>
        <li>Can be a performance bottleneck on more dynamic apps</li>
      </ul>
    </main>
  );
}
