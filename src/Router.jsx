import { Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import { MainPage } from "./pages/MainPage";

function Router() {
  const location = useLocation();
  console.log("location", location);
  return (
    <div className="App">
      <Routes>
        <Route path={"/movies"} element={<MainPage />} />
        <Route path={`/${location.pathname}`} element={<MainPage />} />
      </Routes>
    </div>
  );
}

export { Router };
