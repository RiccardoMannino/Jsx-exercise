import { useState, useEffect } from "react";

export function useGithubUser(username) {
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

        if (response.status !== 200) {
          setError(new Error());
        }
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

  return { data, error, loading };
}
