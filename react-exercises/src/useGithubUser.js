import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json()); // questa funzione viene passata come secpndo parametro del SWR

export function useGithubUser(username) {
  const { data, error } = useSWR(
    () => (username ? `https://api.github.com/users/${username}` : null),
    fetcher
  );

  return {
    users: data,
    error,
    isLoading: !data && !error,
  };
}
