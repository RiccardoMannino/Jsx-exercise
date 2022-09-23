import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr";
import { App } from "./App";

const fetcher = (url) => fetch(url).then((response) => response.json()); // questa funzione viene passata come secpndo parametro del SWR

export function Root() {
  return (
    <SWRConfig value={{ fetcher }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SWRConfig>
  );
}
