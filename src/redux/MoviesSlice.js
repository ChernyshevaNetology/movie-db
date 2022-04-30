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
  initialState: {
    isLoading: true,
    movies: [],
  },
  reducers: {},
  extraReducers: {
    [fetchMovies.pending]: (state, action) => {
      return {
        ...state,
      };
    },
    [fetchMovies.fulfilled]: (state, action) => {
      return {
        isLoading: false,
        movies: action.payload,
      };
    },
    [fetchMovies.rejected]: (state, action) => {
      return state;
    },
  },
});

export const actions = moviesSlice.actions;
export { moviesSlice };
