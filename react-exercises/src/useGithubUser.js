import useSWR, { mutate } from "swr";

export function useGithubUser(username) {
  const { data, error } = useSWR(() =>
    username ? `https://api.github.com/users/${username}` : null
  );

  function handleRefresh() {
    mutate();
  }

  return {
    users: data,
    error,
    isLoading: !data && !error,
    refresh: handleRefresh,
  };
}
