import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { ClickCounter } from "./ClickCounter";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name="Riccardo" />} />
        <Route path="counter" element={<ClickCounter initialValue={0} />} />
        <Route path="users/:username" element={<ShowGithubUser />} />
      </Routes>
    </div>
  );
}
