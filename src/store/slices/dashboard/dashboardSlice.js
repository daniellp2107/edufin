import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    alumnosActivos: 0,
    accesosMes: 0,
    accesosPorDiaEnElMes: [],
  },
  reducers: {
    storeDashboard: (state, { payload }) => {
      state.alumnosActivos = payload.alumnosActivos;
      state.accesosMes = payload.accesosMes;
      state.accesosPorDiaEnElMes = payload.accesosPorDiaEnElMes;
    },
  },
});

export const {storeDashboard} = dashboardSlice.actions;
