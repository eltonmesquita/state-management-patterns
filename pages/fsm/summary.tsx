import { container } from "@/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function Summary() {
  return (
    <main style={container} className={poppins.className}>
      <h1>Finite State Machine - Summary</h1>
      <h2>Pros</h2>
      <ul>
        <li>Easy to debug</li>
        <li>Very clear picture of the possible states</li>
        <li>Easy to document with the right tools</li>
        <li>More bug-proof than most of the simpler patterns</li>
        <li>Suitable for complex states</li>
        <li>Easy to test</li>
        <li>Widely known and used pattern</li>
      </ul>

      <h2>Cons</h2>
      <ul>
        <li>Can get complex easily</li>
        <li>Simple apps might not reap the benefits</li>
        <li>Unhandled states might crash the app</li>
        <li>Requires some planning</li>
        <li>Learning the tooling can take a good effort</li>
      </ul>
    </main>
  );
}
