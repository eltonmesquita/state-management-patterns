export const fetchGithubStars = async ({
  repo,
  username,
  callback,
}: {
  repo: string;
  username: string;
  callback: (count: number) => any;
}) => {
  const response = await fetch(
    `https://api.github.com/repos/${encodeURIComponent(
      username
    )}/${encodeURIComponent(repo)}`
  );

  try {
    const { stargazers_count } = await response.json();
    if (!stargazers_count)
      throw new Error("Oh no, something wrong is not right!");

    return callback(stargazers_count);
  } catch (error) {
    throw new Error("Oh no, something wrong is not right!");
  }
};
