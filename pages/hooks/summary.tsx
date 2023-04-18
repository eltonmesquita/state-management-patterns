import { container } from "@/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function Summary() {
  return (
    <main style={container} className={poppins.className}>
      <h1>Hooks/Context</h1>
      <h2>Pros</h2>
      <ul>
        <li>Stupid simple to implement</li>
        <li>Lowest learning curse possible</li>
        <li>Easy to debug</li>
        <li>Not strongly opinionated</li>
        <li>Baked in react, no additional tools</li>
        <li>Pairs perfectly with custom hooks</li>
      </ul>

      <h2>Cons</h2>
      <ul>
        <li>Doesn't guard the store against unknown states</li>
        <li>No clear separation of concerns</li>
        <li>Can get bloated quickly</li>
        <li>Not strongly opinionated</li>
        <li>Not predictable</li>
        <li>Bug-prone</li>
        <li>Hard to document</li>
        <li>
          Not able to handle complex apps by itself, needs additional
          tooling/libraries/patterns
        </li>
        <li>Can be a performance bottleneck</li>
        <li>Not really a pattern 😅</li>
      </ul>
    </main>
  );
}
