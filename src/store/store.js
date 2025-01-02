import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/auth/userSlice";
import { contenidosSlice } from "./slices/contenidos/contenidosSlice";

export const store = configureStore({
    reducer: {
      userReducer: userSlice.reducer,
      contenidosReducer: contenidosSlice.reducer,
    },
  });
  