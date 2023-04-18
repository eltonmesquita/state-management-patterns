import {
  container,
  fetchGithubStars,
  formStyles,
} from "@/utils";
import { useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function HooksTwo() {
  const [repo, setRepo] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const [stars, setStars] = useState<null | number>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async () => {
    setIsLoading(true);

    try {
      fetchGithubStars({
        repo,
        username,
        callback: (stars) => {
          setStars(stars);
          setIsLoading(false);
        },
      });
    } catch (error) {
      setIsLoading(false);
      setError('Your stars didn\'t align, bad luck!')
    }

  };

  return (
    <main style={container} className={poppins.className}>
      <h1>Hooks/Context pattern II</h1>

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
        <button disabled={isLoading}>
          Get Stars!!!
        </button>
      </form>
      {stars && (
        <p>
          The project {username}/{repo} has {stars} stars
        </p>
      )}

      {isLoading  && <p>Loading...</p>}

      {error && (
        <p>Oh no, something wrong is not right!</p>
      )}
    </main>
  );
}
