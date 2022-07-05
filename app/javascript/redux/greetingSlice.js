import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGreeting = createAsyncThunk(
  "greetings/fetchGreeting",
  async () => {
    const response = await axios.get("http://127.0.0.1:3000/api/v1/greeting");
    const formattedRes = await response.data;
    return formattedRes;
  }
);

export const greetingSlice = createSlice({
  name: "greetings",
  initialState: {
    greeting: {},
    status: null,
  },

  extraReducers: {
    [fetchGreeting.pending]: (state) => {
      state.status = "Loading";
    },
    [fetchGreeting.fulfilled]: (state, action) => {
      state.greeting = action.payload;
      state.status = "Success";
    },
    [fetchGreeting.rejected]: (state) => {
      state.status = "Failed";
    },
  },
});

export default greetingSlice.reducer;

// const FETCH = "greeting/fetchRandomGreeting";

// const initialState = {};

// const greetingReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH:
//       return { ...state, ...action.payload };
//   }
// };

// export const getGreeting = (data) => {
//   return {
//     type: FETCH,
//     payload: data,
//   };
// };

// export const fetchGreeting = () => async (dispatch) => {
//   try {
//     await fetch("http://127.0.0.1:3000/api/v1/greeting").then((response) =>
//       dispatch(getGreeting(response.json()))
//     );
//   } catch (err) {
//     throw new Error(err);
//   }
// };

// export default greetingReducer;
