import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/auth/userSlice";
import { contenidosSlice } from "./slices/contenidos/contenidosSlice";
import { usuariosSlice } from "./slices/usuarios/usuariosSlice";
import { notificacionSlice } from "./slices/notificacion/notificacionSlice";

export const store = configureStore({
    reducer: {
      userReducer: userSlice.reducer,
      contenidosReducer: contenidosSlice.reducer,
      usuariosReducer: usuariosSlice.reducer,
      notificacionReducer: notificacionSlice.reducer,
    },
  });
  