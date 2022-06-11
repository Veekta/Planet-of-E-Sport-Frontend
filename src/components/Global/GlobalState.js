import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const GlobalState = createSlice({
  name: "State of app",
  initialState,
  reducers: {
    createUser: (state, { payload }) => {
      state.currentUser = payload;
    },
  },
  signOut: (state) => {
    state.currentUser = null;
  },
});

export const { createUser, signOut } = GlobalState.actions;

export default GlobalState.reducer;
