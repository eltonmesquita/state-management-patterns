import {
  boxStyles,
  container,
  fetchGithubStars,
  formStyles,
  starsReducer,
} from "@/utils";
import { useReducer, useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function FsmTwo() {
  const [state, dispatch] = useReducer(starsReducer, { isLoading: false });

  const [repo, setRepo] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const onSubmit = async () => {
    dispatch({ type: "IS_LOADING", isLoading: true });

    try {
      fetchGithubStars({
        repo,
        username,
        callback: (stars) => {
          dispatch({ type: "UPDATE_STARS", stars });
          dispatch({ type: "IS_LOADING", isLoading: false });
        },
      });
    } catch (error) {
      dispatch({ type: "UPDATE_ERROR", error: error as string })
      dispatch({ type: "IS_LOADING", isLoading: false });
    }

  };

  return (
    <main style={container} className={poppins.className}>
      <h1>Reducer pattern II</h1>

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
        <button disabled={state.isLoading}>
          Get Stars!!!
        </button>
      </form>
      {state.stars && (
        <p>
          The project {username}/{repo} has {state.stars} stars
        </p>
      )}

      {state.isLoading  && <p>Loading...</p>}

      {state.error && (
        <p>Oh no, something wrong is not right!</p>
      )}
    </main>
  );
}
