import { useState, useEffect } from "react";

export function GithubUser({ username }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false); // setta lo stato di caricamento
  const [error, setError] = useState(null); // setta lo stato per gli errori

  useEffect(() => {
    const fetchDati = async (username) => {
      setLoading(true); // caricamento
      setError(null); // nessun errore
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error); // errore
        setData(null); // quindi nessun dato
      } finally {
        setLoading(false); // rimozione della scritta di caricamento
      }
    };
    fetchDati(username);
  }, [username]);

  return (
    <div>
      {/* caricamento */}
      {loading && <h1>Loading...</h1>}
      {/* eventuali errori */}
      {error && <h1>There has been an error</h1>}
      {/* risposta */}
      {data && <h1>{data.name}</h1>}
    </div>
  );
}
