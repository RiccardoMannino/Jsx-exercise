import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { ClickCounter } from "./ClickCounter";
import { ShowGithubUser } from "./ShowGithubUser";

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

          <Link to="users/:username">ShowGithubUser</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Welcome name="Riccardo" />} />
        <Route path="counter" element={<ClickCounter initialValue={0} />} />
        <Route path="users/:username" element={<ShowGithubUser />} />
      </Routes>
    </div>
  );
}
