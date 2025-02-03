import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./Authentication/slice";
export default configureStore({
  reducer: {
    authentication: authenticationReducer
  },
});