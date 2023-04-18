import { boxStyles, container, fetchGithubStars, formStyles } from "@/utils";
import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const machine = {
  states: {
    idle: "idle",
    loading: "loading",
    success: "success",
    error: "error",
  },
};

export default function FsmTwo() {
  const [current, setCurrent] = useState(machine.states.idle);
  const [stars, setStars] = useState<null | number>(null);
  
  const [repo, setRepo] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const onSubmit = async () => {
    setCurrent(machine.states.loading);

    try {
      fetchGithubStars({
        repo,
        username,
        callback: (stars) => {
          setStars(stars);
          setCurrent(machine.states.success);
        },
      });
    } catch (error) {
      setCurrent(machine.states.error);
    }
  };

  useEffect(() => {
    if (current === machine.states.success) {
      setTimeout(() => {
        setCurrent(machine.states.idle);
      }, 2000);
    }
  }, [current]);

  return (
    <main style={container} className={poppins.className}>
      <h1>Finite State Machine II</h1>
      <p>Current state: {current}</p>

      <form
        style={formStyles}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <input
          onChange={(e) => setUsername(e.currentTarget.value)}
          type="text"
          placeholder="Username"
        />
        <input
          onChange={(e) => setRepo(e.currentTarget.value)}
          type="text"
          placeholder="Repo"
        />
        <button disabled={current === machine.states.loading}>
          Get Stars!!!
        </button>
      </form>
      {stars && (
        <p>
          The project {username}/{repo} has {stars} stars
        </p>
      )}

      {current === machine.states.loading && <p>Loading...</p>}

      {current === machine.states.error && (
        <p>Oh no, something wrong is not right!</p>
      )}
    </main>
  );
}
