import React from "react";
import { Link, Route, Routes, Outlet } from "react-router-dom";
import { Welcome } from "./Welcome";
import { ClickCounter } from "./ClickCounter";
import { ShowGithubUser } from "./ShowGithubUser";
import { GithubUserList } from "./GithubUserList ";
import { GithubUser } from "./GithubUser";

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

          <Link to="users">ShowGithubUser</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Welcome name="Riccardo" />} />
        <Route
          path="/users"
          element={
            <div>
              <GithubUserList username={[""]} />
              <hr />
              <Outlet />
            </div>
          }
        >
          <Route path=":username" element={<ShowGithubUser />} />
          <Route index element={<h1>Add a user and select it</h1>} />
        </Route>

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
