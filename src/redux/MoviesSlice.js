import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk(
  "api/themoviedb",
  async ({ API }) => {
    try {
      const request = await fetch(API);
      const { results } = await request.json();
      return results;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchMovies.pending]: (state, action) => {
      return [];
    },
    [fetchMovies.fulfilled]: (state, action) => {
      return action.payload;
    },
    [fetchMovies.rejected]: (state, action) => {
      return [];
    },
  },
});

export const actions = moviesSlice.actions;
export { moviesSlice };
