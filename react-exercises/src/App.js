import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { ClickCounter } from "./ClickCounter";

import { GithubUserList } from "./GithubUserList ";

export function App() {
  return (
    <div>
      <div>
        <h1>My awesome app!</h1>
        <div>
          <Link className="mr-3" to="/">
            Home
          </Link>

          <Link className="mr-3" to="counter">
            ClickCounter
          </Link>

          <Link to="user">ShowGithubUser</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Welcome name="Riccardo" />} />
        <Route
          path="/users"
          element={<GithubUserList username={["riccardomannino"]} />}
        />
        <Route path=":username" element={<ShowGitHubUser />} />
        <Route />
        <Route
          path="*"
          element={
            <div>
              <p>Pagina non trovata!</p>
              <Link to="/">Torna alla Homepage</Link>
            </div>
          }
        />
        <Route path="counter" element={<ClickCounter initialValue={0} />} />
      </Routes>
    </div>
  );
}
