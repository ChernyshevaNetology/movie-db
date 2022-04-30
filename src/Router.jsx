import { Routes, Route, useLocation, useParams } from "react-router-dom";
import React from "react";
import { MainPage } from "./pages/MainPage";
import { DetailedMovieInfo } from "./components/DetailedMovieInfo";

function Router() {
  const location = useLocation();
  const params = useParams();
  return (
    <div className="App">
      <Routes>
        <Route index element={<MainPage />} />
        {/*<Route path={"/movies"} element={<MainPage />} />*/}
        {/*<Route path={`/${location.pathname}`} element={<MainPage />} />*/}
        <Route path={"movies/:page"} element={<MainPage />} />
        <Route path={"movies/:page/:id"} element={<DetailedMovieInfo />} />
      </Routes>
    </div>
  );
}

export { Router };
