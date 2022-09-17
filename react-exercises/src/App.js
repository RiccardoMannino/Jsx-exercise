import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";

export function App() {
  const [language, setLanguage] = useState("en");
  function handleLanguageChange(event) {
    setLanguage(event.target.value);
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name="Riccardo" />}></Route>
      </Routes>
    </div>
  );
}
