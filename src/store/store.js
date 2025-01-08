import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/auth/userSlice";
import { contenidosSlice } from "./slices/contenidos/contenidosSlice";
import { usuariosSlice } from "./slices/usuarios/usuariosSlice";

export const store = configureStore({
    reducer: {
      userReducer: userSlice.reducer,
      contenidosReducer: contenidosSlice.reducer,
      usuariosReducer: usuariosSlice.reducer,
    },
  });
  