import { createSlice } from "@reduxjs/toolkit";
import { fetchEnums } from "./enumActions";

interface EnumState {
  enums: unknown[];
  loading: boolean;
  error: string | null;
}

const initialState: EnumState = {
  enums: [],
  loading: false,
  error: null,
};

const enumSlice = createSlice({
  name: "enums",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEnums.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEnums.fulfilled, (state, action) => {
        state.loading = false;
        state.enums = action.payload;
      })
      .addCase(fetchEnums.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch enums";
      });
  },
});

export default enumSlice.reducer;
