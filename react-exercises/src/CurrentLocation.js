import { useState, useEffect } from "react";

export function CurrentLocation() {
  const [location, setLocation] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      function success(pos) {
        const crd = pos.coords;

        setLocation();
        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
      }
      navigator.geolocation.getCurrentPosition(success, error);
    } catch (err) {
      setError(`ERROR(${err.code}): ${err.message}`);
    } finally {
      setLoading(false);
    }
  }, []);
  //   return { location, loading, error };
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {location && <p>{location}</p>}
    </div>
  );
}
