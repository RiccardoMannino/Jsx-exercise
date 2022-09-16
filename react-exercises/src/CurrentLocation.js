import { useState, useEffect } from "react";

export function CurrentLocation(loc) {
  const [location, setLocation] = useState(loc);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);

      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(position);
        console.log("Your current position is:");
        console.log(`Latitude : ${position.latitude}`);
        console.log(`Longitude: ${position.longitude}`);
        console.log(`More or less ${position.accuracy} meters.`);
      });
    } catch (err) {
      setError(`ERROR(${err.code}): ${err.message}`);
    } finally {
      setLoading(false);
    }
  }, [loc]);

  function posizione() {
    try {
      setLoading(true);

      navigator.geolocation.getCurrentPosition((position) => {
        setLocation((position) => {
          return {
            latitudine: position.latitude,
            longitudine: position.longitude,
            precisione: position.accuracy,
          };
        });
      });
    } catch (err) {
      setError(`ERROR(${err.code}): ${err.message}`);
    } finally {
      setLoading(false);
    }
  }

  return { location, loading, error, posizione };
  // return (
  //   <div>
  //     {loading && <p>Loading...</p>}
  //     {error && <p>{error}</p>}
  //     {location && <p>{location}</p>}
  //   </div>
  // );
}
