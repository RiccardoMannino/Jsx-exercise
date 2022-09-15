import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { data, error, loading } = useGithubUser(username);

  return (
    <div>
      {/* caricamento */}
      {/* {loading && <h1>Loading...</h1>} */}
      {/* eventuali errori */}
      {/* {error && <h1>There has been an error</h1>} */}
      {/* risposta */}
      {data && <h1>{data.name}</h1>}
    </div>
  );
}
