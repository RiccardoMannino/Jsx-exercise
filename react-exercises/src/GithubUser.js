import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { users, error, isloading } = useGithubUser(username);

  return (
    <div>
      {/* caricamento */}
      {isloading && <h1>Loading...</h1>}
      {/* eventuali errori */}
      {error && <h1>There has been an error</h1>}
      {/* risposta */}
      {users && <h1>{users.name}</h1>}
    </div>
  );
}
