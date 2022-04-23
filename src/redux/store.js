import { configureStore } from "@reduxjs/toolkit";
import { moviesSlice } from "./MoviesSlice";

const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
  },
});

export { store };
