import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpGetEnums } from "../../services/enums";

// Define a thunk action to fetch enums asynchronously
export const fetchEnums = createAsyncThunk("enums/fetchEnums", async () => {
  const response = await httpGetEnums();
  return response.data;
});
