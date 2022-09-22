import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { users, error, isloading, refresh } = useGithubUser(username);

  return (
    <div>
      <button onClick={refresh}>Refresh</button>
      {/* caricamento */}
      {isloading && <h1>Loading...</h1>}
      {/* eventuali errori */}
      {error && <h1>There has been an error</h1>}
      {/* risposta */}
      {users && <h1>{users.name}</h1>}
    </div>
  );
}
