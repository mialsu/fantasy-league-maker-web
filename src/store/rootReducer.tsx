// rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import enumReducer from "../features/enums/enumReducer";
import authReducer from "../features/auth/authReducer";

const rootReducer = combineReducers({
  enums: enumReducer,
  auth: authReducer,
  // Add other reducers as needed
});

export default rootReducer;
