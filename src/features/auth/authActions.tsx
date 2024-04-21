import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { httpLogin } from "../../services/auth";

// Define a thunk action to login user asynchronously
export const login = createAsyncThunk(
  "auth/login",
  async (credentials: { email: string; password: string }) => {
    const response: AxiosResponse<{ token: string }> = await httpLogin(
      credentials
    );
    return response.data.token; // Return only the token
  }
);
